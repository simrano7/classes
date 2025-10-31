const routes = require("express").Router()

const categoryController = require("../apis/category/categoryController")
const productController = require("../apis/product/productController")
const courseController = require("../apis/course/courseController")
const studentController = require("../apis/student/studentController")
const teacherController = require("../apis/teacher/teacherController")
const userController = require("../apis/user/userController")

routes.post("/user/login",userController.login)

// before login we can
routes.use(require("../middleware/admintokenchecker"))  //token checker call
// login ke badd hi chlengi

routes.post("/category/all",categoryController.getall)
routes.post("/category/single",categoryController.getsingle)


routes.post("/product/all",productController.getall)
routes.post("/product/single",productController.getsingle)
routes.post("/product/pagination",productController.getpagination)

routes.post("/course/all",courseController.getall)
routes.post("/course/single",courseController.getsingle)
routes.post("/user/changePassword",userController.changePassword)

routes.post("/category/add",categoryController.add)



// products
routes.post("/product/add",productController.add)

routes.post("/product/update",productController.update)
routes.post("/product/changestatus",productController.changestatus)
routes.post("/product/delete",productController.deleteone)


routes.post("/course/add",courseController.add)



routes.post("/student/add",studentController.add)
routes.post("/student/all",studentController.getall)
routes.post("/student/single",studentController.getsingle)

routes.post("/teacher/register",teacherController.register)
routes.post("/teacher/all",teacherController.getall)
module.exports = routes