export default function Third(props){
    console.log("third com",props.data);
    var recarr = props.data;
    return(
        <div>
            <h1>Third {recarr[3]}</h1>
            {/* <h2> {props.data[0]}</h2>
            <h2> {props.data[1]}</h2>
            <h2> {props.data[2]}</h2>
            <h2> {props.data[3]}</h2>
            <h2> {props.data[4]}</h2> */}
            {/* {
                    // arrname.map((el,i)=>{}) 
                    recarr.map((el,i)=>{
                        // console.log("element",el);
                        return(
                            <h2 style={{color:"pink"}}>{el}</h2>
                        )
                        
                    })
            } */}
            {
                recarr.map((el,i)=>(
                        <h1>{el}</h1>
                ))
            }
        </div>
    )
}