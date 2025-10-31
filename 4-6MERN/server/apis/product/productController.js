const productModel = require("./productModel")
var{uploadImg} = require("../../utilities/helper")
const add = (req,res)=>{
    var errMsgs = []
    if(!req.body.name){
            errMsgs.push("name is required!!")
    }
    if(!req.body.price){
            errMsgs.push("price is required!!")
    }
    // if(!req.file){
    //         errMsgs.push("image is required!!")
    // }
    if(req.files?.length<=0){
        errMsgs.push("Images are required")
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
        productModel.findOne({name:req.body.name})
        .then(async(productdata)=>{
                console.log("product data ",productdata);
                if(productdata == null){
                    // insertion
                    let proobj = new productModel()
                    proobj.name = req.body.name
                    // proobj.image ="products/"+req.file.filename
                    // if(req.file){
                    //         try{
                    //                 // code try
                    //             let url =await uploadImg(req.file.buffer)
                    //             proobj.image = url
                    //         }
                    //         catch(err){
                    //             res.send({
                    //                 status:400,
                    //                 success:false,
                    //                 message:"Cloudnairy error!!"
                    //             })

                    //         }
                    // }

                    let imageArr=[]
                    for(let i=0;i<req.files?.length;i++){
                        let url=await uploadImg(req.files[i]?.buffer);
                        imageArr.push(url)            
                    }
                    proobj.images=imageArr  
                    proobj.price = req.body.price
                    proobj.save()
                    .then((insertedproduct)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"product added successfully!!",
                            data:insertedproduct
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
                        message:"data already exists with same name!!"
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
        productModel.find(req.body)
        .then((prodata)=>{
            console.log(prodata);
            if(prodata.length === 0){
                    // console.log("data not found");
                res.send({
                    status:404,
                    success:false,
                    message:"Data not found!!!",
                }) 
            }
            else{
                // console.log("data loaded!!");
                res.send({
                    status:200,
                    success:true,
                    message:"Data loaded!!!",
                    data:prodata
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
const getsingle = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
            errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            messsage:errMsgs
        })
    }
    else{

        productModel.findOne({_id:req.body._id})
            .then((prodata)=>{
                console.log(prodata);
                if(prodata == null){
                    // /data not found
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    // data loaded
                    res.send({
                        status:200,
                        success:true,
                        message:"Data loaded!!!",
                        data:prodata
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

const getpagination = (req,res)=>{
    var errMsgs = []
    if(!req.body.pageno){
            errMsgs.push("page is required!!")
    }
    if(!req.body.limit){
        errMsgs.push("limit is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        var pageno = req.body.pageno
        var limit = req.body.limit
        var skip = 0
        if(pageno>1){
                skip = (pageno-1)*limit
        }
        productModel.find()
        .limit(limit)
        .skip(skip)
        .then((prodata)=>{
            
            res.send({
                status:200,
                success:true,
                messsage:"data loaded!!",
                data:prodata
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

}
// update (select old/findOne ->update )
const update = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        // update logic
        productModel.findOne({_id:req.body._id})
        .then((prodata)=>{
            // console.log("productdata",prodata);
            if(prodata == null){
                // data not found
                res.send({
                    status:404,
                    success:false,
                    message:"data not found!!"
                })
            }
            else{
                // update  record
                if(req.body.name){
                    // findOne
                    prodata.name = req.body.name
                }
                if(req.file){
                    prodata.image = "products/"+req.file.filename
                }
                if(req.body.price){
                    prodata.price = req.body.price
                }
                if(req.body.status){
                    prodata.status = req.body.status
                }
                prodata.save()
                .then((updateddata)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"Data updated successfully!!",
                        data:updateddata
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
// soft delete
const changestatus =(req,res)=>{
    var errMsgs = ""
    if(!req.body._id){
        errMsgs += "_id is required!!"
    }
    if(!req.body.status){
        errMsgs += "status is required!!"
    }
    if(!!errMsgs){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        // change status logic\
        productModel.findOne({_id:req.body._id})
        .then((prodata)=>{
            if(prodata == null){
                // data not  found
                res.send({
                    status:404,
                    success:false,
                    message:"data not found!!"
                })
            }
            else{
                // update status
                prodata.status = req.body.status
                prodata.save()
                .then((updateprodata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"status changed!!",
                            data:updateprodata
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
        })
          .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Something went wrong!!"
            })
        })

    }
}

const deleteone = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required")
    }
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        productModel.findOne({_id:req.body._id})
        .then((prodata)=>{
            console.log("product data",prodata);
            if(prodata == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"data not found!!"
                    })
            }
            else{
                // deletion
                productModel.deleteOne({_id:req.body._id})
                .then((productdeldata)=>{
                    res.send({
                        status:200,
                        success:true,
                        message:"Data deleted successfully!!"
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
        })
          .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Something went wrong!!"
            })
        })
    }
}
module.exports = {add,getall,getsingle,getpagination,update,changestatus,deleteone}