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

async function getAllAchievement(req, res) {
    try {
        const achievement = await Achievement.find();
        res.status(200).json({ success: true, message: "Found all achievements", data: achievement });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}


// Internal logic (no routes). Digunakan oleh file repository lainnya.
// Automatically updates achievements
// Format parameter
/*
    id    ==> ID of the account to be passed
    cond  ==> condition to be checked. condition is passed as a string with the same name as it's conditional value. e.g. cond = "playtime"
*/
async function checkAchievement(id, cond) {
    try {
        const account = await Account.findById(id);
        const achievement = await Achievement.findOne({
            condition: cond
        })
        if(achievement && account) {
            let cond_met;
            switch (achievement.condition) {
                case "first_bought_game":
                    cond_met = (account.games.length === 1) ? true : false;
                    break;

                default:
                    break;
            }
            if(cond_met === true) {
                await Account.updateOne(
                    { _id: account._id },
                    { $push: { achievement: achievement._id } }
                );
            }
        } else {
            return {message:"Account or achievement not found"}
        }
    } catch (err) {
        return {message:err}
    }
}


module.exports = {
    addAchievement,
    checkAchievement,
    getAllAchievement
}