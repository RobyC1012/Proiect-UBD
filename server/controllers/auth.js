import Users from "../models/users";
import Student from "../models/students";
import Faculty from "../models/faculty";
import Specialization from "../models/specializations";
import Course from "../models/courses";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import { json } from "express";


const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const SES = new AWS.SES(awsConfig);

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).exec();
    console.log("LOGIN USER", user);
    if (!user) return res.status(400).send("No user found");
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong password");
    // create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logout success." });
  } catch (err) {
    console.log(err);
  }
};



export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, lastName, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await Users.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new Users({
      name,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await Users.findById(req.auth._id).select("-password").exec();
    console.log("CURRENT_USER", user);
    return res.json({ ok: true, user });
  } catch (err) {
    console.log(err);
  }
};

export const getusers = async (req, res) => {
  try {
    const users = await Users.find().select("-password").exec()
    return res.json({ users })
  } catch (err) {
    console.log(err);
  }
}

export const getuser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).select("-password").exec()
    const stud = await Student.findById(user.studId).exec()
    return res.json({ user, stud })
  } catch (err) {
    console.log(err);
  }
}

export const updateuser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).select("-password").exec()
    const student = await Student.findById(user.studId).exec()

    user.name = req.body.name,
      user.lastName = req.body.lastName,
      user.email = req.body.email,
      user.role = req.body.role
    await user.save()

    if (!student && (user.role == "Student" || req.body.role == "Student")) {
      const newStudent = new Student({
        pi: "undefined",
        birthDate: new Date(),
        address: "undefined",
        city: "undefined",
        county: "undefined",
        postalCode: 123456,
        phone: "123456789",
        statut: req.body.statut,
      });
      await newStudent.save();
      user.studId = newStudent._id;
      await user.save()
    } else if (student && (user.role == "Student" || req.body.role == "Student")) {
      student.pi = req.body.pi,
        student.birthDate = req.body.birthDate,
        student.address = req.body.address,
        student.city = req.body.city,
        student.county = req.body.county,
        student.postalCode = req.body.postalCode,
        student.phone = req.body.phone,
        student.statut = req.body.statut
      await student.save()
    }
    return res.json({ ok: true })
  } catch (err) {
    console.log(err);
  }
}

export const getfaculties = async (req, res) => {
  try {
    const faculty = await Faculty.find().exec()
    return res.json({ faculty })
  } catch (err) {
    console.log(err);
  }
}

export const addfaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find({ name: req.body.name }).exec()
    if (faculty.length == 0) {
      const newFaculty = new Faculty({
        name: req.body.name,
        description: req.body.description,
      });
      await newFaculty.save()
      console.log("Faculty added")
    }
    return res.json({ ok: true })
  } catch (err) {
    console.log(err);
  }
}

export const addspecialization = async (req, res) => {
  try {
    const spec = await Specialization.find({ name: req.body.name }).exec()
    const faculty = await Faculty.findOne({ name: req.body.faculty }).exec()
    if (spec.length == 0) {
      if (faculty) {
        const newSpec = new Specialization({
          name: req.body.name,
          description: req.body.description,
          years: req.body.years,
          facultyID: faculty._id
        });
        await newSpec.save()
        return res.json({ ok: true })
      }
      else {
        console.log("Faculty not found")
        return res.json({ ok: false })
      }
    }
    console.log("Specialization already exists")
    return res.json({ ok: false })
  }
  catch (err) {
    console.log(err);
  }
}

export const getspecializations = async (req, res) => {
  try {
    const spec = await Specialization.find().exec()
    const specialization = []
    for (let element in spec) {
      const faculty = await Faculty.findById(spec[element].facultyID.toString()).exec()
      let fName = " "
      if (!faculty) {
        fName = "undefined"
      }
      else {
        fName = faculty.name
      }
      specialization.push({
        _id: spec[element]._id,
        name: spec[element].name,
        description: spec[element].description,
        years: spec[element].years,
        facultyID: spec[element].facultyID,
        faculty: fName
      })
    }
    return res.json({ specialization })
  } catch (err) {
    console.log(err);
  }
}

export const deletespecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findById(req.params.id).exec()
    if (specialization) {
      const courses = await Course.find({ specializationId: specialization._id })
      for (let element in courses) {
        await courses[element].remove()
      }
      await specialization.remove()
      return res.json({ ok: true })
    }
    else {
      return res.json({ ok: false })
    }
  }
  catch (err) {
    console.log(err);
  }
}

export const getfaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id).exec()
    console.log(req.params.id)
    return res.json({ faculty })
  } catch (err) {
    console.log(err);
  }
}

export const getspecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findById(req.params.id).exec()
    const faculty = await Faculty.findById(specialization.facultyID).exec()
    return res.json({ specialization, faculty })
  } catch (err) {
    console.log(err);
  }
}

export const editspecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findById(req.params.id).exec()
    const faculty = await Faculty.findOne({ name: req.body.faculty }).exec()
    specialization.name = req.body.name
    specialization.description = req.body.description
    specialization.years = req.body.years
    console.log(faculty)
    if (faculty) {
      specialization.facultyID = faculty._id
    }
    await specialization.save()
    return res.json({ ok: true })


  } catch (err) {
    console.log(err);
  }
}

export const getteachers = async (req, res) => {
  try {
    const teacher = await Users.find({ role: "Teacher" }).select("-password").exec()
    const teachers = []
    for (let element in teacher) {
      teachers.push({
        _id: teacher[element]._id,
        fullname: teacher[element].name + ' ' + teacher[element].lastName,
        email: teacher[element].email,
        role: teacher[element].role,
        name: teacher[element].name,
        lastName: teacher[element].lastName,
      })
    } res.json({ teachers })
  } catch (err) {
    console.log(err);
  }
}

export const addcourse = async (req, res) => {
  try {
    const newCourse = new Course({
      name: req.body.name,
      year: req.body.year,
      semester: req.body.semester,
      specializationId: req.body.specializationID,
      teacherId: req.body.teacherID
    })
    await newCourse.save()
    console.log(newCourse)
    return res.json({ ok: true })
  }
  catch (err) {
    console.log(err);
  }
}

export const getcourses = async (req, res) => {
  try {
    const course = await Course.find().exec()
    const courses = []
    for (let element in course) {
      const teacher
        = await Users.findById(course[element].teacherId.toString()).exec()
      const specialization
        = await Specialization.findById(course[element].specializationId.toString()).exec()
      const faculty
        = await Faculty.findById(specialization.facultyID.toString()).exec()
      courses.push({
        _id: course[element]._id,
        name: course[element].name,
        year: course[element].year,
        semester: course[element].semester,
        specializationId: course[element].specializationId,
        teacherId: course[element].teacherId,
        teacher: teacher.name + ' ' + teacher.lastName,
        specialization: specialization.name,
        faculty: faculty.name
      })
    }
    return res.json({ courses })
  } catch (err) {
    console.log(err);
  }
}

export const deletefaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id).exec()
    if (faculty) {
      const spec = await Specialization.find({
        facultyID: faculty._id
      }).exec()
      for (let element in spec) {
        const courses = await Course.find({ specializationId: spec[element]._id }).exec()
        for (let element in courses) {
          await courses[element].remove()
        }
        await spec[element].remove()
      }
      await faculty.remove()
      return res.json({ ok: true })
    }
    else {
      return res.json({ ok: false })
    }
  }
  catch (err) {
    console.log(err);
  }
}