const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");
const Game = require("../schema/GameSchema");

async function addAccount(req, res) {
    try {
        const { username, password, email, games, achievements } = req.body;

        const account = new Account({ username: username, password: password, email:email, games:games, achievements:achievements });
        await account.save();

        res.status(200).json({ success: true, message: "Successfully Added Account", data: account });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function loginAccount(req, res) {
    try {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username: username });
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid Password");

        res.status(200).json({ success: true, message: "Found user", data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

async function getAllAccounts(req, res) {
    try {
        const accounts = await Account.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, message: "Found all accounts", data: accounts });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        console.log(`Error Message: ${err.message}`);
    }
}

module.exports = {
    addAccount,
    loginAccount,
    getAllAccounts
}