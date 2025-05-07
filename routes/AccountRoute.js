const express = require("express");
const accountRepo = require("../repositories/repository.account");
const router = express.Router();


// get all scores
router.get("", accountRepo.getAllScores);

// get score by id
router.get("/:scoreId", accountRepo.getScoreById);

// post score
router.post("", accountRepo.postScore);

// add comment to score
router.post("/addComment", accountRepo.addCommentToScore);


module.exports = router;