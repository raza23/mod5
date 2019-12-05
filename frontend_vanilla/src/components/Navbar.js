import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

// const Navbar = (props) => {
//   console.log(props)

class Navbar extends React.Component {
  
  // componentWillMount() {
  //   if (sessionStorage.getItem('jwt'))
  //     this.props.loginSuccess();
  // }

  // render() {
    
    //   handleLogOut = () => {
//     localStorage.clear()
//     this.props.history.push('/home')
// }

// renderLogButton = () => {
//     return localStorage.length > 0 ? <Menu.Item name='logout' id='logout' 
//     onClick={this.handleLogOut} /> : <Menu.Item name='login' id='login' 
//     active={this.state.activeItem === 'login'} onClick={this.handleClick} />
// }
render() {
  console.log("logged_in: ", this.props);
  
  return (
    <div className="ui inverted red menu">
      <Link to="/Home" className="item">
        <h2 className="ui header">
          <div className="content">DTRT</div>
          <div className="sub header"></div>
        </h2>
      </Link>
      <NavLink to="/" activeClassName="active item" className="item">
        <h3 className="ui header">Logout</h3>
      </NavLink>
      <NavLink exact to="/Home" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
      <NavLink exact to="/logs" activeClassName="active item" className="item">
        <h3 className="ui header">Logs</h3>
      </NavLink>
    </div>
  );
}}

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
