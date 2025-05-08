const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");
const Achievement = require("../schema/AchievementSchema");

async function addAchievement(req, res) {
    try {
        const { image, name, description } = req.body;

        const achievement = new Achievement({ image: image, name: name, description: description});
        await achievement.save();

        res.status(200).json({ success: true, message: "Successfully Added Achievement", data: achievement });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}


module.exports = {
    addAchievement
}