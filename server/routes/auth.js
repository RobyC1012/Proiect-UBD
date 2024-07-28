import express from "express";

const router = express.Router();

import {
    login,
    logout,
    register,
    currentUser,

    getusers,
    getuser,
    updateuser,
    getstudents,
    removeuser,

    getfaculties,
    addfaculty,
    deletefaculty,
    getfaculty,

    addspecialization,
    getspecializations,
    getspecialization,
    editspecialization,
    deletespecialization,
    
    getteachers,
    
    addcourse,
    getcourses,

    enrollstudents,
    getstudcourse,
    getstudgrades,
    addgrade,
    getgrades,
}
from "../controllers/auth";
import { requireSignin } from "../middlewares";

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);
router.get("/current-user", requireSignin, currentUser);

router.get("/getusers", getusers);
router.get("/getuser/:id", getuser);
router.put("/updateuser/:id", updateuser);
router.get("/getstudents", getstudents);

router.get("/getfaculties", getfaculties);
router.post("/addfaculty", addfaculty);
router.delete("/deletefaculty/:id", deletefaculty);
router.get("/getfaculty/:id", getfaculty);

router.post("/addspecialization", addspecialization);
router.get("/getspecializations", getspecializations);
router.get("/getspecialization/:id", getspecialization);
router.put("/editspecialization/:id", editspecialization);
router.delete("/deletespecialization/:id", deletespecialization);

router.get("/getteachers", getteachers);

router.post("/addcourse", addcourse);
router.get("/getcourses", getcourses);

router.post("/enrollstudents", enrollstudents)

router.get("/getstudcourse/:id", getstudcourse)
router.get("/getstudgrades/:id", getstudgrades)
router.post("/addgrade", addgrade)
router.get("/getgrades", getgrades)
router.delete("/remove-user/:id", removeuser)



module.exports = router;