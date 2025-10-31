const categoryModel = require("../category/categoryModel")
const courseModel = require("../course/courseModel")
const productModel = require("../product/productModel")
const studentModel = require("../student/studentModel")
const dashboard = async(req,res)=>{
    var totalcat = 0
    var totalproducts = 0
    var totalcourses = 0
    var totalstudents = 0
   await categoryModel.countDocuments()
    .then((counttotalcategories)=>{
            totalcat = counttotalcategories
    })
   await productModel.countDocuments()
    .then((counttotalproducts)=>{
            totalproducts = counttotalproducts
    })
  await  courseModel.countDocuments()
    .then((counttotalcourses)=>{
            totalcourses = counttotalcourses
    })
   await studentModel.countDocuments()
    .then((countstudents)=>{
            totalstudents = countstudents
    })
    res.send({
        status:200,
        success:true,
        message:"Dashboard Loaded!!",
        totalproducts,
        totalcourses,
        totalstudents,
        totalcategories:totalcat


    })
}

module.exports ={dashboard}