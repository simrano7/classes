import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";



export default function ManageCategory(){
  var[categoryData,setCategorydata]=useState([])

  var[Load,setLoad]= useState(true)
    useEffect(()=>{
      axios.post("https://kizaapi.ksesystem.com/api/category/all")
      .then((res)=>{
        console.log("response is",res.data.data);
        setCategorydata(res.data.data)
        setLoad(false)
      })
      .catch((err)=>{
        console.log("error is",err);
        
      })

    },[Load])
    function setInactive(id){
      console.log("inactive fun call",id);
      let data = new FormData()
      data.append("_id",id)
      data.append("status",false)
      axios.post("https://kizaapi.ksesystem.com/api/category/update",data,{headers:{Authorization:sessionStorage.getItem("token")}})
      .then((res)=>{
        console.log(res);
        if(res.data.success){
          setLoad(true)
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message) 
        }
        
      })
      .catch((err)=>{
        console.log("err is ",err);
        
      })

      
    }
    function setactive(id){
      console.log("inactive fun call",id);
      let data = new FormData()
      data.append("_id",id)
      data.append("status",true)
      axios.post("https://kizaapi.ksesystem.com/api/category/update",data,{headers:{Authorization:sessionStorage.getItem("token")}})
      .then((res)=>{
        console.log(res);
        if(res.data.success){
          setLoad(true)
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message) 
        }
        
      })
      .catch((err)=>{
        console.log("err is ",err);
        
      })

      
    }
    return(
      // JSX (JS+XML(html+own tags))
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Manage Category
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Manage Category
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* About Start */}
      
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
                <ClipLoader cssOverride={{marginLeft:"40%"}} size="150" loading={Load}/>
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <ToastContainer/>
                {
                  !Load?
                    <table className="table table-bordered" border={"1"}>
                        <tr>
                          <th>Srno</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        {/* {
                          categoryData.map((el,index)=>{
                            return(
                              <>
                                <tr></tr>
                              </>
                            )
                          })
                        } */}
                        {
                          categoryData.map((el,index)=>(
                            <>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{el.name}</td>
                                    <td><img src={"https://kizaapi.ksesystem.com/"+el.image} alt="no_image" height={"100px"} width={"100px"}/></td>
                                    <td>{el.status===true?"true":"false"}</td>
                                    <td>
                                      <Link className="btn btn-success" style={{backgroundColor:"green"}} to={"/admin/updateCategory/"+el._id}>Edit</Link>
                                     {
                                      el.status == true?
                                      <button className="btn btn-danger" style={{backgroundColor:"red"}} onClick={()=>{setInactive(el._id)}}>Inactive</button>:<button className="btn btn-success" style={{backgroundColor:"green"}}  onClick={()=>{setactive(el._id)}}>Active </button>
                                     } 
                                    </td>
                                </tr>
                            </>
                          ))
                        }
                    </table>:""
                }

              </div>
            </div>
          </div>
        </div>
      
      </>
      
    )
}