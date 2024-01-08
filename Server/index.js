// mongodb+srv://priyanshuchoudhary0104:Priyanshu%400209@cluster0.vxg1bcg.mongodb.net/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Signup.tsx')
const app = express();
app.use(cors());

const bodyParser = require('body-parser')


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://priyanshu:priyanshu@cluster0.wrio9jz.mongodb.net/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.post('/signup', (req, res) => {

    UserModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err))
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
// const { email, password } = req.body;
// UserModel.findOne({ email: email, password: password })
//     .then(user => {
//         if (user) {
//             if (user.password === password) {
//                 res.json("Success")
//             } else {
//                 res.json("Incorrect password")
//             }
//         } else {
//             res.json("No User Found ")
//         }
//     })



const PORT = 8080;
app.listen(PORT, () => {
    console.log("server started on port ", PORT);
})





