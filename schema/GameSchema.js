const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    genre:       { type: String, required: true },
    description: { type: String},
}, { timestamps: true }
); 

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;