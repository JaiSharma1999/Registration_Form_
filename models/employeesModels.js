const mongoose = require("mongoose")
const employee = mongoose.Schema({
    name:{
        type : String,
        require : true
    },email:{
        type : String,
        require : true 
    },
    mobile:{
        type : Number,
        require : true
    },
    password:{
        type : String,
        require : true
    }
})
const Employeei = mongoose.model("Employee",employee);
module.exports = Employeei