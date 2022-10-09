import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "138px",
  padding: "20px",
  margin: "0 10px 10px",
  background: "black",
  textDecoration: "none",
  color: "white",
};
//navbar
function NavBar() {
  return (
    <div className="nav">
      <div className="nav-image">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="links">
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
          YourBikeCollection
        </NavLink>
      </div>
    </div>
  );
}
export default NavBar;
