const express = require("express");
const achievementRepo = require("../repositories/repository.achievement");
const router = express.Router();

// add user
router.post("/addachievement", achievementRepo.addachievement);

module.exports = router;