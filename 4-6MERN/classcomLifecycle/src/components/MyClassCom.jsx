import { Component } from "react";

class MyClassCom extends Component{
    constructor(){
        super()
        this.state = {
            count:10
        }
    }
    componentDidMount(){
        console.log("component create");
    }

    render(){
        const inc = ()=>{
            console.log("inc fun call");
            this.setState({count:this.state.count+1})
            
        }
        return(
            <>
            <h1>Count is {this.state.count}</h1>
            <button onClick={inc}>+++</button>
            <button onClick={()=>{this.setState({count:this.state.count-1})}}>---</button>

            </>
        )
    }
}

export default MyClassCom