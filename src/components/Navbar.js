import React from "react";
import {  NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "20px",
  margin: "0 10px 10px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

  function NavBar() {
    return (
      <div>
      <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/bikePage"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          BikePage
        </NavLink>
        <NavLink
          to="/addBike"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          {/* YourBikeCollection
        </NavLink>
        <NavLink
          to="/yourBikeCollection"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }} */}
         

        AddBike
        </NavLink>

      </div>
    
    );
  }
  export default NavBar;