import { useState } from "react";



function FavoriteColor(){
    // const color='purple';
    const [age , setAge]=useState(1)
// setage is a state , usestate is imported from react

    return <>
    <h1>my Age is {age}</h1>
    <button onClick={()=>{setAge(age+1) }} >increase</button>
    <button onClick={()=>{setAge(age-1) }} >decrease</button>

    </>
}

export default FavoriteColor;