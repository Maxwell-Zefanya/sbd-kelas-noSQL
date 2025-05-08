const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");

async function addUser(req, res) {
    try {
        const { username, name, age } = req.body;

        const user = new User({ account_username: username, name: name, age: age});
        await user.save();

        res.status(200).json({ success: true, message: "Successfully Registered User", data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, message: "Found all users", data: users });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

module.exports = {
    addUser
}