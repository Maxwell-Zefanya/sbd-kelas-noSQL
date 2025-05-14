const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");
const Review = require("../schema/ReviewSchema");
const Achievement = require("../schema/AchievementSchema");

async function addReview(req, res) {
    try {
        const { game_id, account_id, review } = req.body;

        const new_review = new Review({ game_id: game_id, account_id: account_id, review: review});
        await new_review.save();

        res.status(200).json({ success: true, message: "Successfully Added Review", data: new_review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getAllReview(req, res) {
    try {
        const review = await Review.find();
        res.status(200).json({ success: true, message: "Found all reviews", data: review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getByGame(req, res) {
    try {
        const {game_id} = req.body
        const review = await Review.find({ game_id: game_id});
        res.status(200).json({ success: true, message: "Found all reviews", data: review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getByUser(req, res) {
    try {
        const {account_id} = req.body
        const review = await Review.find({ account_id: account_id});
        res.status(200).json({ success: true, message: "Found all reviews", data: review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function deleteById(req, res) {
    try {
        const {id} = req.body
        const review = await Review.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Review deleted successfully", data: review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function deleteSpecific(req, res) {
    try {
        const {account_id, game_id} = req.body
        const review = await Review.findOneAndDelete(
            {
                account_id: account_id,
                game_id: game_id
            }
        );
        res.status(200).json({ success: true, message: "Review deleted successfully", data: review });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

module.exports = {
    addReview,
    getAllReview,
    getByGame,
    getByUser
}