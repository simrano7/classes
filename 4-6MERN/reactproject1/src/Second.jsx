import Third from "./Third";
export default function Second(props){
    console.log("props in second",props.data);
    var arr = [1,2,"gursimran",20.2,-5]
    // ["","","","1.jpg"]
    return(
        <div>
                <h1>Second  {props.data}</h1>
                <Third data={arr}/>
        </div>
    )
}