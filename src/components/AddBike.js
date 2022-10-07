import React from "react";


function AddBike(){
  return(
    <div>
       <div>
      <h1>Add a Bike</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Bikes Name"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
    )
}

export default AddBike;