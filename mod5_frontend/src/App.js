import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Nav from './Components/Nav';
import {connect} from 'react-redux'
import actions from './redux/actions'

// const App = () => {
  class App extends React.Component {
    componentDidMount(){
      if (localStorage.token) {
      this.props.persistUser()
    }
  }
  
  render () {
    console.log(this.props)
    // debugger
  return (
    <Router>
      <Nav />
      <Routes user={this.props.stateObj} />
    </Router>
  );
};
}
const mapStateToProps = (state) => ({stateObj: state})

const mapDispatchToProps = {
  
  persistUser: actions.persistUser
} 
 

export default connect(mapStateToProps, mapDispatchToProps) (App);
