import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ClipLoader, PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function Master(){
    const load = useSelector((state)=>state.loaderReducer.load)
    // console.log("load is ",load);
    
    return(
        <>
        <div > 
      <PacmanLoader  color="black" size={90} cssOverride={{display:"block", margin:"0 auto", position:"absolute", top:"50%", left:"50%"}} loading={load}/>
      <ToastContainer/>
        </div>
        <div className={load && "disabled-screen"}>
        {/* <div className="disabled-screen"> */}
            <Header></Header>
            <Outlet/>
            <Footer/>
        </div>
        </>
    )
}