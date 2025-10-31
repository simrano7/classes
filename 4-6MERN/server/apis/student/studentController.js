const studentModel = require("./studentModel")
const add = (req,res)=>{
    var errMsgs = []
    if(!req.body.name){
            errMsgs.push("name is required!!")
    }
    if(!req.body.contact){
            errMsgs.push("contact is required!!")
    }
    if(!req.body.email){
            errMsgs.push("email is required!!")
    }
    if(!req.body.address){
            errMsgs.push("address is required!!")
    }
    if(!req.body.courseId){
            errMsgs.push("course is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        // insertion code 
        // duplicacy remove
        // backend find data ->name
        studentModel.findOne({email:req.body.email})
        .then((studata)=>{
                console.log("student data ",studata);
                if(studata == null){
                    // insertion
                    let stuobj = new studentModel()
                    stuobj.name = req.body.name
                    stuobj.contact = req.body.contact
                    stuobj.email = req.body.email
                    stuobj.address = req.body.address
                    stuobj.courseId = req.body.courseId
                    stuobj.save()
                    .then((studentdata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"student added successfully!!",
                            data:studentdata
                        })
                    })
                     .catch((err)=>{
                            console.log("err is",err);
                            
                                res.send({
                                    status:500,
                                    success:false,
                                    message:"Something went wrong!!"
                                })
                        })

                }
                else{
                    // data already exists with same name
                    res.send({
                        status:422,
                        success:false,
                        message:"data already exists with same email!!"
                    })
                }
                
        })
        .catch((err)=>{
            console.log("err is",err);
            
                res.send({
                    status:500,
                    success:false,
                    message:"Something went wrong!!"
                })
        })
    }

}

const getall = (req,res)=>{
    studentModel.find()
    .populate("courseId")
    
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
    studentModel.findOne({_id:req.body._id})
    // .populate("courseId")
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