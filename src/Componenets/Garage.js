import { Component } from "react";
import Car from "./Car"

class Bike extends Component{

   
    render (){
        
        return <h2>i'm a  {this.props.bikeBrand} bike</h2>
    }
}

function Garage(props){
    const {info}=props;
    const {carBrand , bikeBrand}=info;
    const text=`Hello everyone `;
    const showInfo=info.carBrand!==undefined && info.bikeBrand==undefined;
    const isdoorOPen=true;
    
    const carList=[

        {carBrand:"BMW" , color:"black" },
        {carBrand:"Ford" , color:"white"},
        {carBrand:"Tesla" ,color:"pink"}
    ];
    const num=[1,2,3,4,5]
    return <>
    <h1>{text} </h1>
    { showInfo && <Bike  bikeBrand={bikeBrand}/>    }
    {/* ternary operator */}
    
    {/* <Car carBrand={carBrand}/> */}
    {isdoorOPen  ? <h2>garage door is open</h2> :<h2>garage door is closed</h2> }
    {/* and operator */}

    <ul>
       {carList.map((carinfo)=>
       <li key={carinfo.carBrand}><Car carinfo={carinfo} /></li> )} 
    </ul>
        <ul>
    {num.map((carinfo , index)=>
       <li key={index} >{carinfo}</li> )} 
    </ul>
    </>
}

export default Garage;