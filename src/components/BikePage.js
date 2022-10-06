import React,{useState,useEffect} from "react";
import YourBikeCollection from "./YourBikeCollection";
import BikeCollection from "./BikeCollection";

function BikePage() {
  //start here with your code for step one
  const[bikeData,setBikeData]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((res)=> res.json())
    .then((data)=> setBikeData(data));
  },[]);

  return (
    <div>
      <YourBikeCollection />
      <BikeCollection bikes={bikeData}/>  
    </div>
  )
}

export default BikePage;
