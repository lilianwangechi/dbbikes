import React,{useState,useEffect} from "react";
import BikeCollection from "./BikeCollection";
import YourBikeCollection from "./YourBikeCollection";

function BikePage() {
  //start here with your code for step one
  const[bikeData,setBikeData]=useState([]);
  // const [yourbikeCol,setYourBikeCol]=useState([]);

  
  //get fetch request
  useEffect(()=>{
    fetch("http://localhost:8002/bikes")
    .then((res)=> res.json())
    .then((data)=> setBikeData(data));
  },[]);

  return (
    <div>
      <BikeCollection bikes={bikeData}/> 
       <YourBikeCollection
       bikes={bikeData}
       setBikeData={setBikeData}
      
       />
    </div>
  )
}

export default BikePage;
