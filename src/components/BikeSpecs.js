import React from "react";

const bikeTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BikeSpecs({ bike }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bike.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bike.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bike.catchphrase}
            </p>
            <strong>
              Class: {bike.bike_class}
              <i className={bikeTypeClasses[bike.bike_class]} />
            </strong>
            <br />
            
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("connect this to a function that shows all bikes")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log(
                  "connect this to a function that adds this bike to your bike collection list"
                )
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeSpecs;
