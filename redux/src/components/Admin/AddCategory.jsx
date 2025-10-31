import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

export default function AddCategory(){
  var[name,setName] = useState("")
  var[Image,setImage] = useState("")
  var[load,setLoad]=useState(false);
  var nav = useNavigate();

  
  let cssobj ={
    marginLeft:"500px"
  }
  function handleForm(e){
        e.preventDefault()
        setLoad(true)
        let data = new FormData()
        data.append("name",name)
        data.append("category_image",Image)
        axios.post("https://kizaapi.ksesystem.com/api/category/add",data,{headers:{Authorization:sessionStorage.getItem("token")}})
        .then((res)=>{
          console.log("res is ",res);
          if(res.data.success){
              toast.success(res.data.message)
              setName("")

              setLoad(false)
            }
            else{
              toast.error(res.data.message)
              setName("")
              setLoad(false)
          }
          
        })
        .catch((err)=>{
          console.log("err  is",err);
          
        })
  }
    return(
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Add Category
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
                  Add Category
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        <div className="container-xxl py-5">
    <div className="container">
      <ToastContainer/>
      <ClipLoader  color="red" size={150} cssOverride={cssobj} loading={load}/>

      {
        !load?<div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              {/* <h1 className="mb-4">Make Appointment</h1> */}
              <form  onSubmit={handleForm}>
                <div className="row g-3">           
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                      
                      />
                      <label htmlFor="cname">Name</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        onChange={(e)=>{
                            setImage(e.target.files[0])
                        }}  
                      
                      />
                      <label htmlFor="cname">Image</label>
                    </div>
                  </div>
                 
                
              
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded"
                src="/assets/img/appointment.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>:""
      }
      
    </div>
  </div>
      </>
      
    )
}