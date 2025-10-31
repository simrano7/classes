const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    experience:{type:String,default:""},
    DOJ:{type:String,default:""},
    salary:{type:String,default:""},
    image:{type:String,default:"noImage.jpg"},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = new mongoose.model("teachers",teacherSchema)