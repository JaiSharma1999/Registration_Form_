const Employee = require("../models/employeesModels")
const insertEmploye = async(req,res)=>{
    try{
        const employee = new Employee({
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile,
            password : req.body.password
        })
        const result = await employee.save();
        res.send("Register has been Success")

    } catch(error){
        res.send(error.message)
    }
}
module.exports={
    insertEmploye
}