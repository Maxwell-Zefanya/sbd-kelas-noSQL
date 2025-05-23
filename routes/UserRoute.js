const express = require("express");
const userRepo = require("../repositories/repository.user");
const router = express.Router();

// add user
router.post("/addUser", userRepo.addUser);
router.get("/getAllUsers", userRepo.getAllUsers);

module.exports = router;