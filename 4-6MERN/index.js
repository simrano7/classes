// console.log("project created!!");
const express = require("express")
const app = express()
const data = require("./data")
const port = 5000
const db = require("./server/config/db")
const cors = require("cors")
// app.method("path",()=>{})
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+("/server/public/")))
    // http://localhost:5000/apis/category/add
    
    const seeder = require("./server/config/seeder")
    seeder.adminreg()
const apiroutes = require("./server/routes/apiroutes")
app.use("/apis",apiroutes)
const adminroutes = require("./server/routes/adminroutes")
app.use("/admin",adminroutes)
// console.log("data is ",data);
// console.log("data is ",data);


// basic api syntax
// get and post 

// app.method(path,(req,res)=>{})
app.get("/",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"Welcome !!!"
    })
})
app.get("/about",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"About api call!!",
        data:data
    })
})
app.post("/contact",(req,res)=>{
    console.log("query params",req.query);
    res.send({
        status:200,
        success:true,
        message:"contact api call!!",
        data:"name is "+req.query.name,
        rollno:"rollno is "+req.query.rollno
    })
})
app.get("/gallery",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"Gallery api call"
    })
})
app.get("/paramsapi/:name",(req,res)=>{
    console.log(req.params);
    
    res.json({
        status:200,
        success:true,
        message:"params api call"
    })
})

app.post("/persons",(req,res)=>{
    console.log("query params",req.query);

    res.send({
        status:200,
        success:true,
        message:"persons api create!!",
        data:req.query.name
    })
})
app.post("/city/:name/:pincode",(req,res)=>{
    console.log("params",req.params);
    
    res.send({
        status:200,
        success:true,
        message:"city api create!!",
    })
})

app.listen(port,(err)=>{
        if(err != null){
                console.log("err while connecting server",err);
                
        }
        else{
            console.log("Server connected!!",port);
            
        }
})


// express 
// npm i express
