import { Component } from "react";

export default class MyClass extends Component{
// states 
    constructor(){
        super();
        this.state ={
            count:10 
        }
    }
    render(){
        //fun call
        const incFun = ()=>{
            console.log("inc fun call");
            this.setState({count:this.state.count+1})
            
        }
        return(
            <>
            {/* jsx */}
            <h1>This is class component {this.state.count}</h1>
            <button onClick={incFun}>+++</button>
            <button onClick={()=>{this.setState({count:this.state.count-1})}}>---</button>

            </>
        )
    }

}