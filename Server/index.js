// mongodb+srv://priyanshuchoudhary0104:Priyanshu%400209@cluster0.vxg1bcg.mongodb.net/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Signup.tsx')

const app = express()
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://priyanshuchoudhary0104:Priyanshu%400209@cluster0.vxg1bcg.mongodb.net/User");


app.post('/signup', (req, res) => {
    UserModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email, password: password })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Incorrect password")
                }
            }
        })
})



const PORT = 8080;
app.listen(PORT, () => {
    console.log("server started on port ", PORT);
})