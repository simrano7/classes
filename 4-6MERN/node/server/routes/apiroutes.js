const routes = require("express").Router()
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const categoryController = require("../apis/category/categoryController")
const productController = require("../apis/product/productController")
const courseController = require("../apis/course/courseController")
const studentController = require("../apis/student/studentController")
const teacherController = require("../apis/teacher/teacherController")
const userController = require("../apis/user/userController")
const dashboardController =require("../apis/dashboard/dashboardController")
routes.post("/user/login",userController.login)
routes.post("/category/all",categoryController.getall)
routes.post("/category/single",categoryController.getsingle)


routes.post("/product/all",productController.getall)
routes.post("/product/single",productController.getsingle)
routes.post("/product/pagination",productController.getpagination)

routes.post("/course/all",courseController.getall)
routes.post("/course/single",courseController.getsingle)

const teacherstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/public/teachers')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const teacherupload = multer({ storage: teacherstorage })
routes.post("/teacher/register",teacherupload.single("image"),teacherController.register)
// before login we can
routes.use(require("../middleware/tokenchecker"))  //token checker call
// login ke badd hi chlengi
routes.post("/user/changePassword",userController.changePassword)

routes.post("/category/add",categoryController.add)

const productstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/public/products')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const productupload = multer({ storage: productstorage })

// products
routes.post("/product/add",upload.array("images",6),productController.add)
routes.post("/dashboard",dashboardController.dashboard)

routes.post("/product/update",productupload.single("image"),productController.update)
routes.post("/product/changestatus",productController.changestatus)
routes.post("/product/delete",productController.deleteone)


routes.post("/course/add",courseController.add)



routes.post("/student/add",studentController.add)
routes.post("/student/all",studentController.getall)
routes.post("/student/single",studentController.getsingle)

routes.post("/teacher/all",teacherController.getall)
module.exports = routes