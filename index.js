const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json())

app.post("/register",(req,res)=>{
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.post("/login",(req,res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email:email})
    .then(users=>{
        if(users){
            if(users.password === password){
                res.json("Sucess")
        }else{
            res.json("Password incorrect")}
        }else{
            res.json("User not found")
        }
}) 
})

mongoose.connect("mongodb://localhost:27017/SignUp");

app.listen(3002,()=>{
    console.log("Its working: SERVER: its working")
})