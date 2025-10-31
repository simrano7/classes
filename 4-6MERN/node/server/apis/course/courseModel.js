const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name:{type:String,default:""},
    duration:{type:String,default:""},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = new mongoose.model("courses",courseSchema)