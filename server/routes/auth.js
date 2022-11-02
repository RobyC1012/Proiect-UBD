import express from "express";

const router = express.Router();

import {
    login,
    logout,
    getData,
    register
}
from "../controllers/auth";

router.post("/login", login);
router.get("/logout", logout);
router.get("/data", getData);
router.post("/register", register);

module.exports = router;