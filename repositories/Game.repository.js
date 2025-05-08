const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");

async function addGame(req, res) {
    try {
    const { game_name, game_genre, game_description } = req.body;

    const game = new Game({
        name: game_name,
        genre: game_genre,
        description: game_description
    });

    await game.save();

    res.status(200).json({ success: true, message: "Successfully Added Game", data: game });

    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getAllGames(req, res) {
    try {
        const games = await Game.find();
        res.status(200).json({ success: true, message: "Found all games", data: games });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getGameById(req, res) {
    try {
        const { gameId } = req.params;

        const game = await Game.findById(gameId);

        if(!game) {
            throw new Error("Game not found");
        }

        res.status(200).json({ success: true, message: "User found", data: game });
    } catch(err){
        res.status(400).json({ success: false, message: err.message });
        console.log(err);
    }

}


module.exports = {
    addGame,
    getAllGames,
    getGameById
}