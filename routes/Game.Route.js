const express = require("express");
const gameRepo = require("../repositories/Game.repsitory");
const router = express.Router();

//add game
router.post("/addGame", gameRepo.addGame);


module.exports = router;