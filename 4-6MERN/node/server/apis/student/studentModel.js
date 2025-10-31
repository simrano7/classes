const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{type:String,default:""},
    contact:{type:String,default:""},
    email:{type:String,default:""},
    address:{type:String,default:""},
    courseId:{type:mongoose.Schema.Types.ObjectId,ref:"courses"},  
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = new mongoose.model("students",studentSchema)