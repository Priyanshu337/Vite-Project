const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    next();
})

const UserModel = mongoose.model("users", userSchema)
module.exports = UserModel;

