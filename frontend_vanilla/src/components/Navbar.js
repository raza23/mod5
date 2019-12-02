import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui inverted red menu">
      <Link to="/" className="item">
        <h2 className="ui header">
          <div className="content">Volunteer</div>
          <div className="sub header"></div>
        </h2>
      </Link>
      <NavLink to="/about" activeClassName="active item" className="item">
        <h3 className="ui header">About</h3>
      </NavLink>
      <NavLink exact to="/oppurtunities" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
