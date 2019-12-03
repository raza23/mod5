import React from "react";
// import { Link } from "react-router-dom";

class Header extends React.Component {
    // state = {
    //     this.state: null
    // }
    // constructor(){
    // componentDidMount() {
    //     this.state:this.props.user
    // }}
    componentWillReceiveProps(props) {
        this.setState({

            user: props.user
        })
        }
  render() {
    console.log(this.state)
    // const name = this.props.user === undefined || null ?  (<div></div>) : this.props.user.name
    return (
      <h1>Hey  </h1>
      );
    }
  }
  
  export default Header;