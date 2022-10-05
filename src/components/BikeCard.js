import React from "react";

const biketTypeClasses = {
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
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bike.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bike.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bike.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
