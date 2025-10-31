import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function Payment(){
    var[data,setData]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:5000/api/product/all")
        .then((res)=>{
                console.log("res is ",res);
                setData(res?.data?.data)
                
        })
        .catch((err)=>{
            console.log("err is ",err);
            
        })
    },[])
    function handlePayment(_id){
          console.log("handle paymeny fun cal",_id);
          axios.post("http://localhost:5000/api/pay",{_id:_id})
          .then((res)=>{
                console.log("res is ",res);
                var order = res.data.order
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
      
                
          })
          .catch((err)=>{
                console.log("err is",err);
                
          })
          
    }

    return(
        <>
       
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
                        <div className="offset-md-2 col-md-10">
                            <table className="table ">
                                <tr>
                                    <th>Srno</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Payment status</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    data.map((el,i)=>(
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{el?.name}</td>
                                            <td>{el?.price}</td>
                                            <td>{el?.paymentStatus}</td>
                                            <td><button className="btn btn-success" style={{backgroundColor:"green"}} onClick={()=>{handlePayment(el._id)}} >Pay</button></td>
                                        </tr>
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