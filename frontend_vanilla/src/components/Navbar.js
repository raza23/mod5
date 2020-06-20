import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

// const Navbar = (props) => {
//   console.log(props)

class Navbar extends React.Component {
  render() {
    console.log("logged_in: ", this.props);

    return (
      <div className="ui inverted dark blue menu">
        <Link to="/Home" className="item">
          <h2 className="ui header">
            <div className="content">MASS VOLUNTEER</div>
            <div className="sub header"></div>
          </h2>
        </Link>
        <NavLink to="/" activeClassName="active item" className="item">
          <h3 className="ui header">Logout</h3>
        </NavLink>
        <NavLink
          exact
          to="/Home"
          activeClassName="active item"
          className="item"
        >
          <h3 className="ui header">Home</h3>
        </NavLink>
        <NavLink
          exact
          to="/logs"
          activeClassName="active item"
          className="item"
        >
          <h3 className="ui header">Logs</h3>
        </NavLink>
      </div>
    );
  }
}

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
