const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    age:      { type: Number, required: true },
    account_username: { type: String, required: true, ref: 'Account' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;