
import useCounter from "./useCounter"
export default function Counter(){
    var[count,IncFun,DecFUn]=useCounter();
   
    return(
        <>
       
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
                <div className=" offset-md-5 col-md-4">
                    <h1>Count is {count}</h1>
                    <button onClick={IncFun}>+++</button>
                    <button onClick={DecFUn}>---</button>

                </div>

            </div>
          </div>
        </div>
        {/* About End */}
      
      </>
      
    )
}