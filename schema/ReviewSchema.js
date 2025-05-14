const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    review:     { type: String, required: true }
}, { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;