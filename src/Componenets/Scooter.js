import { useState } from "react"

function Scooter(){
    const[scooter,setScooter]=useState(
        {
            color:"red",
            brand:"honda",
            model:"activa 6g",
            year:"2020"

        }
    )

    function changeColor(){
        // setScooter({color:'blue'}) only returns the color , makes others empty
        setScooter(previousState =>{
            return {...previousState,color:'blue'}
        })
    }

    return <>
    <h1>My scooter</h1>
    <p>color: {scooter.color}</p>
    <button onClick={changeColor}>change color</button>
    <p> brand:{scooter.brand}</p>
    <p> model:{scooter.model}</p>
    <p> year:{scooter.year}</p>


    </>
}
export default Scooter;