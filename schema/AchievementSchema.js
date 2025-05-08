const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    image: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description:   { type: String, required: true }
}, { timestamps: true }
);

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;