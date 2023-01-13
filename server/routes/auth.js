import express from "express";

const router = express.Router();

import {
    login,
    logout,
    getData,
    register,
    currentUser,
    getusers,
    getuser,
}
from "../controllers/auth";
import { requireSignin } from "../middlewares";

router.post("/login", login);
router.get("/logout", logout);
router.get("/data", getData);
router.post("/register", register);
router.get("/current-user", requireSignin, currentUser);
router.get("/getusers", getusers);
router.get("/getuser/:id", getuser);

module.exports = router;