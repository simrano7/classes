import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function Pay(){
  var[data,setdata]=useState([])
    useEffect(()=>{
      axios.post("http://localhost:5000/api/product/all")
      .then((res)=>{
        console.log("response is",res.data);
        setdata(res.data?.data)
        
      })
      .catch((err)=>{
        console.log("error is",err);
        
      })

    },[])
    
   
  const paymentHandler = (_id) => {
    console.log("_id is",_id);
    
    // setLoading(true);
    const data = {_id:_id};
      axios.post("http://localhost:5000/api/pay",data)
      .then((res) => {
        console.log("res is",res);
        
        if (res.data.success) {
          const order = res.data.order;
          const options = {
            key: "rzp_test_81m41n13O8OvjC",
            amount: order.amount,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,

            handler: function (response) {
              console.log("✅ Payment Success:", response);
              toast.success("Payment Successful!");
              // setLoading(false);
              // fetchRequests();
            },
            prefill: {
              name: "Simran",
              email: "simran@gmail.com",
              contact: "1234567890"
            },
            theme: {
              color: "#3399cc"
            }
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            // setLoading(false);
            toast.error(response.error.description || "Payment failed");
          });

          rzp1.open();

        } else {
          // setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        // setLoading(false);
        toast.error(err.message || "Something went wrong");
      });
  };
    return(
      // JSX (JS+XML(html+own tags))
        <>
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
             Pay now
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
                  Pay now
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
                <div className="col-md-8">
                        <table className="table table-bordered">
                          <tr>
                            <td>Srno</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Action</td>
                          </tr>
                          {
                            data?.map((el,index)=>(
                              <>
                                  <tr>
                                    <td>{index+1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.price}</td>
                                    <td>
                                    <button onClick={()=>{paymentHandler(el._id)}}>PayNow</button>

                                    </td>
                                    </tr>                            
                                </>
                            ))
                          }
                        </table>
                </div>
               
            </div>
          </div>
        </div>
      
      </>
      
    )
}