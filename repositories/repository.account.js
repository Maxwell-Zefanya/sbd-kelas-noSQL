const User = require("../schema/UserSchema");
const Account = require("../schema/AccountSchema");


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

module.exports = {
    addAccount
}