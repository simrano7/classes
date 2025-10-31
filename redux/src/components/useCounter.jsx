import { useState } from "react";

function useCounter(){
     var[count,setCount]=useState(10)
        function IncFun(){
            setCount(count+1)
        }
        function DecFUn(){
            setCount(count-1)
        }
    return [count,IncFun,DecFUn]

}

export default  useCounter;