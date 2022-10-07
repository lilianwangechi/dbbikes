import React from "react";

const bikeTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BikeCard({ bike }) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bike.id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={bike.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bike.name}
            <i className={bikeTypeClasses[bike.bike_class]} />
          </div>
           <div className="meta text-wrap">
            <small>{bike.catchphrase}</small>
          </div>
        
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                li
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
