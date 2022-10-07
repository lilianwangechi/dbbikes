import React from "react";
import BikeCard from "./BikeCard";


//function to display bikes to bike page
function BikeCollection({bikes}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bikes.map((bike) =>(
          <BikeCard key={bike.id}
           bike={bike}
           
           />
        ))}
      </div>
    </div>
  );
}

export default BikeCollection;
