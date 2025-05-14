const mongoose = require('mongoose');

/*
    Cek kondisi tiap ada 1 aksi yang berhubungan dengan kondisi tsb
    Achievement per-profile (bukan per-game)
    Valid condition value (as of now): 
        - "game_count"
    e.g.
    "Purchase 10 games" ==>
        condition: "game_count"
        mode: '>'
        value: 10
    valid modes = ['>', '<', '=', '!']
*/

const achievementSchema = new mongoose.Schema({
    image: { type: String, required: true},
    name: { type: String, required: true },
    description:   { type: String, required: true },
    condition:   { type: String, required: true },
    mode:   { type: String, required: true },
    value:   { type: Number, required: true }
}, { timestamps: true }
);

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;