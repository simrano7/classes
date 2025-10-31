import { useState } from "react";
import { CSVLink } from "react-csv";

export default function Dashboard(){
  var[count,setCount]=useState(11);
  //js
  function IncFun(){
    console.log("inc fun call");
    setCount(count+1)
  }
  function DecFun(){
    console.log("dec fun call");
    setCount(count- 1)
  }
  const StudentData = [
    ["firstname", "lastname", "email"],
    ["Simran", "Tomi", "ah@smthing.co.com"],
    ["Aman", "Labes", "rl@smthing.co.com"],
    ["Manisha", "Min l3b", "ymin@cocococo.com"],
    ["Kajal", "Min l3b", "ymin@cocococo.com"],
    ["Puneet", "Min l3b", "ymin@cocococo.com"]
  ];

    return(
      // JSX (JS+XML(html+own tags))
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Dashboard
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
                  Dashboard
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
              <div className="col-md-4"></div>
                  <div className="col-md-4">
                       {/* CSV file download */}
                       <h1>If you want to download student data :</h1>
                       <CSVLink data={StudentData} className="btn btn-primary"> Download</CSVLink>
                  </div>
            </div>
          </div>
        </div>
      
      </>
      
    )
}