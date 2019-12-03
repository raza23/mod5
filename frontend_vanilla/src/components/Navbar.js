import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {

//   handleLogOut = () => {
//     localStorage.clear()
//     this.props.history.push('/home')
// }

// renderLogButton = () => {
//     return localStorage.length > 0 ? <Menu.Item name='logout' id='logout' 
//     onClick={this.handleLogOut} /> : <Menu.Item name='login' id='login' 
//     active={this.state.activeItem === 'login'} onClick={this.handleClick} />
// }
  return (
    <div className="ui inverted red menu">
      <Link to="/about" className="item">
        <h2 className="ui header">
          <div className="content">Volunteer</div>
          <div className="sub header"></div>
        </h2>
      </Link>
      <NavLink to="/" activeClassName="active item" className="item">
        <h3 className="ui header">Login</h3>
      </NavLink>
      <NavLink exact to="/oppurtunities" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
