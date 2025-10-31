import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

export default function Login(){

    var[Email,setEmail]=useState("");
    var[Password,setPassword]=useState("");

    var[load,setLoad]=useState(false);
    var nav = useNavigate();

    function changeName(e){
        console.log("change email fun call",e.target.value);
        setName(e.target.value);
        
    }
    function handleForm(e){
        // form bydefault submission stop 
        e.preventDefault();
        let data ={
          email:Email,
          password:Password
        }
        axios.post("https://kizaapi.ksesystem.com/api/user/login",data)
        .then((res)=>{
          console.log("res is ",res);
          if(res.data.success){
              toast.success(res.data.message)
              sessionStorage.setItem("token",res.data.token)
              sessionStorage.setItem("userType",res.data.data.userType)
              sessionStorage.setItem("_id",res.data.data._id)
              if(res.data.data.userType == 2){
                setTimeout(() => {
                  nav("/admin")
                }, 3000);
              }
          }
          else{
            toast.error(res.data.message)
          }
          
        })
        .catch((err)=>{
          toast.error("Something went Wrong!!")
        })

            
    }
   
    let cssobj ={
      marginLeft:"500px"
    }
    return(
        <>
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Login   
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
                  Login
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
  {/* Classes End */}
  {/* Appointment Start */}
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
              <form onSubmit={handleForm}>
                <div className="row g-3">           
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        value={Email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                      />
                      <label htmlFor="cname">Email</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        value={Password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                      />
                      <label htmlFor="cname">Password</label>
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
  {/* Appointment End */}
 
</>

    )
}