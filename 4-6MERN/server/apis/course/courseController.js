const courseModel = require("./courseModel")

const add = (req,res)=>{
    let courseObj = new courseModel()
    courseObj.name = req.body.name
    courseObj.duration = req.body.duration
    courseObj.save()
    .then((coursedata)=>{
        res.send({
            status:200,
            success:true,
            message:"course added successfully!!",
            data:coursedata
        })
    })
    .catch((err)=>{
        // console.log("err is",err);
        
        res.send({
            status:500,
            success:false,
            message:"Something went wrong!!"
        })
    })
}

const getall = (req,res)=>{
    courseModel.find()
    .then((catdata)=>{
        res.send({
                status:200,
                success:true,
                message:"Data loaded!!",
                data:catdata
        })
    })
    .catch((err)=>{
            res.send({
                status:500,
                success:false,
                messsage:"Something went wrong!!"
            })
    })
}

const getsingle =(req,res)=>{
    course.findOne({_id:req.body._id})
    .then((catdata)=>{
        res.send({
            status:200,
            success:true,
            message:"Single record loaded!!",
            data:catdata
        })
    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Something went wrong!!"
        })
    })
} 
module.exports = {add,getall,getsingle}