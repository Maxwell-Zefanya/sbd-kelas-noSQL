const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");
const Achievement = require("../schema/AchievementSchema");

async function addGame(req, res) {
    const { game_name, game_genre, game_description } = req.body;

    const game = new Game({
        name: game_name,
        genre: game_genre,
        description: game_description
    });

    

}


module.exports = {
    addGame
}