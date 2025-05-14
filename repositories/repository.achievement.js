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


// Internal logic (no routes). Digunakan oleh file repository lainnya.
// Automatically updates achievements
// Format parameter
/*
    id    ==> ID of the account to be passed
    cond  ==> condition to be checked. condition is passed as a string with the same name as it's conditional value. e.g. cond = "playtime"
*/
async function checkAchievement(id, cond) {
    function check(accval, mode, achval) {
        switch(mode) {
            case '>':
                break;
            case '<':
                break;
            case '=':
                break;
            case '!':
                break;
            default:
                break;
        }
    }

    try {
        const account = await Account.findById(id);
        const achievement = await Achievement.findOne({
            condition: cond
        })
        if(achievement) {
            let cond_met;
            switch (achievement.condition.length) {
                case "game_count":
                    check(account.games)
                    break;

                default:
                    break;
            }
            if(cond_met === true) {

            }
        } else {
            return {message:"Achievement not found"}
        }
    } catch (err) {
        return null
    }
}


module.exports = {
    addAchievement,
    checkAchievement
}