const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company")
//------
const express = require("express")
 const app = express();
 const employee = require("./Controller/employeControler")
 const bodyParser = require("body-parser")
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))
 app.set("view engine","ejs");
 app.set("Views","./Views")
 app.get("/register",function(req,res){ 
    res.render("Register.ejs")
 })
 app.post("/register",employee.insertEmploye)
 app.listen(4000, function(){
    console.log("server is run")
 })