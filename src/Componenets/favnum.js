import { Component } from "react";

class Favnum extends Component
{

    constructor(){
        super();
        this.state={num:1 , brand:'BMW'}
    }

    increase=()=>{
        this.setState(previousState=>{return {...previousState,num:this.state.num+1}}  );
    }
    render(){
        return<>
        <h1>i have  {this.state.num} {this.state.brand} car</h1>
        {/* <button onClick={()=>{this.setState({num:this.state.num+1})}}>increase</button> */}
        <button onClick={this.increase} >increase</button>
        </>
    }
}

export default Favnum;