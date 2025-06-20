const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");
const bcrypt = require('bcrypt');

// import {checkAchievement} from "../repositories/repository.achievement";
const Achievement = require("../repositories/repository.achievement");

async function addAccount(req, res) {
    try {
        const { username, password, email} = req.body;

        const account = new Account({ username: username, password: password, email:email});
        await account.save();

        res.status(200).json({ success: true, message: "Successfully Added Account", data: account });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function loginAccount(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        
        const account = await Account.findOne({ username: username });
        if (!account) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, account.password);
        if (!isMatch) throw new Error("Invalid Password");

        res.status(200).json({ success: true, message: "Found account", data: account });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getAllAccounts(req, res) {
    try {
        const accounts = await Account.find().sort({ createdAt: -1 }).populate('games').populate('achievements');
        res.status(200).json({ success: true, message: "Found all accounts", data: accounts });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getById(req, res) {
    try {
        const { user_id } = req.body;
        const accounts = await Account.findById(user_id).populate('games').populate('achievements');
        res.status(200).json({ success: true, message: "Found all accounts", data: accounts });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}


async function addAchievement(req, res) {
    try {
        const { user_id, achievement_id } = req.body;
        const accounts = await Account.updateOne(
            { _id: user_id },
            { $push: { achievements: achievement_id } }
        );
        res.status(200).json({ success: true, message: "Added game to account", data: accounts });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}


async function addGame(req, res) {
    try {
        const { user_id, game_id } = req.body;
        const accounts = await Account.updateOne(
            { _id: user_id },
            { $push: { games: game_id } }
        );
        Achievement.checkAchievement(user_id, "first_bought_game");
        res.status(200).json({ success: true, message: "Added game to account", data: accounts });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

module.exports = {
    addAccount,
    loginAccount,
    getAllAccounts,
    getById,
    addAchievement,
    addGame
}