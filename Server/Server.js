// mongodb+srv://priyanshuchoudhary0104:Priyanshu%400209@cluster0.vxg1bcg.mongodb.net/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Signup.js')
const app = express();
app.use(cors());

const bodyParser = require('body-parser')


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://priyanshuchoudhary0104:Priyanshu@cluster0.vxg1bcg.mongodb.net/manoj", {
    useNewUrlParser: true,
});


app.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, confirmPassword } = req.body;
        const newUser = new UserModel({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });
        await newUser.save()
        res.send("item saved to db");
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Unable to save data", err: err });
    }
})


app.post('/login', async (req, res) => {
    try {
        let getUser = await UserModel.findOne({ email: req.body.email })
        console.log("USER: ", getUser)
        if (getUser) {
            if (getUser.password === req.body.password) {
                res.json({ success: true, user: getUser })
            } else {
                res.json({ success: false, message: "Password Wrong" })
            }
        } else {
            res.json("Not found")
        }
    } catch (err) {
        console.log("THis is error")
        console.error(err);
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log("server started on port ", PORT);
});


