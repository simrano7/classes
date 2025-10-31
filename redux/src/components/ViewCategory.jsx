import axios from "axios";
import { useEffect, useState } from "react";



export default function ViewCategory(){
  var[categoryData,setCategorydata]=useState([])
    useEffect(()=>{
      axios.post("https://kizaapi.ksesystem.com/api/category/all")
      .then((res)=>{
        console.log("response is",res.data.data);
        setCategorydata(res.data?.data)
        
      })
      .catch((err)=>{
        console.log("error is",err);
        
      })

    },[])
    return(
      // JSX (JS+XML(html+own tags))
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              View Category
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
                  View Category
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* About Start */}
      
        <div className="container-xxl py-5">
          <div className="container">
                <select name="" id="">
                    <option value="">Select category</option>
                    {
                        categoryData.map((el,index)=>(
                                <>
                                <option value={el._id}>{el.name}</option>
                                </>
                        ))
                    }
                </select>
            <div className="row g-5 align-items-center">
                <div className="col-md-4">
                </div>
                {
                    categoryData.map((el,index)=>(
                            <>
                            <div className="col-md-4">
                        <div class="card" style={{width: "18rem"}}>
                        <img src={"https://kizaapi.ksesystem.com/"+el?.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{el?.name}</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                        </>
                    ))
                }
               
            </div>
          </div>
        </div>
      
      </>
      
    )
}