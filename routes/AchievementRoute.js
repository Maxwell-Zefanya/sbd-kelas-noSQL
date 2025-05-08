const express = require("express");
const achievementRepo = require("../repositories/repository.achievement");
const router = express.Router();

// add achievement
router.post("/addAchievement", achievementRepo.addAchievement);

module.exports = router;