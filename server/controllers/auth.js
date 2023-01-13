import Users from "../models/users";
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

export const getData = async (req, res) => {
    try {
        Users.find({}, function(err, users){
            if(err) return res.status(400).send("Error");
            return res.json({ users })
        })
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
      return res.json({ ok: true , user });
    } catch (err) {
      console.log(err);
    }
  };

export const getusers = async (req, res) => {
  try{
    const users = await Users.find().exec()
    return res.json({ users })
  } catch (err) {
    console.log(err);
  }
}

export const getuser = async (req, res) => {
  try{
    const user = await Users.findById(req.params.id).exec()
    return res.json({ user })
  } catch (err) {
    console.log(err);
  }
}
