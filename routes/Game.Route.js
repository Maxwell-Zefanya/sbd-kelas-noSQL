const express = require("express");
const gameRepo = require("../repositories/Game.repository");
const router = express.Router();

//add game
router.post("/addGame", gameRepo.addGame);

//gett all game
router.get("/getAllGames", gameRepo.getAllGames);

//get game by id
router.get("/:gameId", gameRepo.getGameById);

module.exports = router;