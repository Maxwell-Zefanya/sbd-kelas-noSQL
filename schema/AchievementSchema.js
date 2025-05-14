const mongoose = require('mongoose');

/*
    Cek kondisi tiap ada 1 aksi yang berhubungan dengan kondisi tsb
    Achievement per-profile (bukan per-game)
    Valid condition value (as of now): 
        - "first_bought_game"
*/

const achievementSchema = new mongoose.Schema({
    image: { type: String, required: true},
    name: { type: String, required: true },
    description:   { type: String, required: true },
    condition:   { type: String, required: true }
}, { timestamps: true }
);

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;