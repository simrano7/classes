const userModel = require("../user/userModel")
const teacherModel = require("./teacherModel")
const bcrypt = require("bcrypt")
var salt = 10
const register = (req,res)=>{
        var errMsgs = []
        if(!req.body.name){
                errMsgs.push("name is requied!!")
        }
        if(!req.body.email){
                errMsgs.push("email is requied!!")
        }
        if(!req.file){
                errMsgs.push("image is requied!!")
        }
        if(!req.body.password){
                errMsgs.push("password is requied!!")
        }
        if(!req.body.experience){
                errMsgs.push("experience is requied!!")
        }
        if(!req.body.DOJ){
                errMsgs.push("DOJ is requied!!")
        }
        if(!req.body.salary){
                errMsgs.push("salary is requied!!")
        }
        if(errMsgs.length>0){
            res.send({
                status:422,
                success:false,
                message:errMsgs
            })
        }
        else{
            userModel.findOne({email:req.body.email})
            .then((userdata)=>{
                if(userdata == null){
                        // insert
                        let userObj = new userModel()
                        userObj.name = req.body.name
                        userObj.email = req.body.email
                        userObj.password =bcrypt.hashSync(req.body.password,salt) 
                        userObj.userType = 2
                        userObj.save()
                        .then((userdata)=>{
                            // insertion in teacher model
                            let teacherObj = new teacherModel()
                            teacherObj.userId = userdata._id
                            teacherObj.experience = req.body.experience
                            teacherObj.DOJ = req.body.DOJ
                            teacherObj.image = "teachers/"+req.file.filename
                            teacherObj.salary = req.body.salary
                            teacherObj.save()
                            .then((teacherdata)=>{
                                     res.send({
                                                status:200,
                                                success:true,
                                                message:"Teacher added!!",
                                                teacherdata,
                                                userdata

                                            })
                            })
                                .catch((err)=>{
                                    res.send({
                                        status:500,
                                        success:false,
                                        message:"Something went wrong"
                                    })
                            })


                        })
                        .catch((err)=>{
                            res.send({
                                status:500,
                                success:false,
                                message:"Something went wrong"
                            })
            })

                }
                else{
                    res.send({
                    status:422,
                    success:false,
                    message:"user already exists with same email!!"
                })  
                }
            })
            .catch((err)=>{
                res.send({
                    status:500,
                    success:false,
                    message:"Something went wrong"
                })
            })
            
        }
}

const getall = (req,res)=>{
    teacherModel.find()
    .populate("userId")
    .then((teacherdata)=>{
         res.send({
                    status:200,
                    success:true,
                    message:"Data loaded",
                    data:teacherdata
                })
    })
     .catch((err)=>{
                res.send({
                    status:500,
                    success:false,
                    message:"Something went wrong"
                })
            })
}
module.exports = {register,getall}

