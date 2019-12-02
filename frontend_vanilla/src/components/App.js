import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';

import { Switch, Route, Redirect } from 'react-router-dom'; 

import AuthForm from './AuthForm';  
import AuthFormOrg from './AuthForm_Org'
import Profile from './Profile'; 
import Main from "./Main"
import NavBar from "./Navbar"
import OppurtunityContainer from "./OppurtunityContainer"
import OppurtunityDetail from "./OppurtunityDetail"
import "../App.css"

const USER_PROFILE_URL = 'http://localhost:3000/api/v1/userprofile'
const ORG_PROFILE_URL = 'http://localhost:3000/api/v1/orgprofile'

// import Gear from './Components/Gear'; 
// import Resorts from './Components/Resorts'; 
// import ResortShowPage from './Components/ResortShowPage'; 
// import SignUpForm from './Components/SignUpForm'; 
// import NavBar from './Components/NavBar'; 
// import Post from './Components/Post'; 
// import Users from './Components/Users';
// import SearchedUsersShowPage from './Components/SearchedUsersShowPage'; 

// import './Styling/App.css';
 
export default class App extends React.Component {

  state = {
    userlogin: false,
    currentUser: null
    
  }

  componentDidMount() {
    let token = localStorage.getItem('jwt')
    console.log(token)
    

    if(token){
      
      fetch(USER_PROFILE_URL, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data =>  {
        // debugger
        this.onChangeUser(data.user_data)})
      
    }
  }

  onChangeUser = (user) => {

    this.setState({currentUser: user,
      userlogin:true})
    // debugger
  }

  // onChangeOrg = (org)

  

  render() {
    return (
      <div className='App'>
        <NavBar />
        <br></br>
        <Switch> 
        {/* <Route exact path='/' render={() => <Redirect to="/login_user"  />} /> */}
          {/* <Route exact path='/' render={() => <Redirect to="/login_user"  />} /> */}
        <Route path="/" exact component={Main} />
        {/* {USER LOGIN} */}
          <Route exact path='/login_user' render={() => <AuthForm onChangeUser={this.onChangeUser}/>} />
          <Route exact path='/login_org' render={() => <AuthFormOrg onChangeUser={this.onChangeUser}/>} />

           <Route exact path='/profile' render={() => <Profile user={this.state.currentUser} /> } />
           <Route path="/oppurtunities" exact component={OppurtunityContainer} />
          <Route path="/oppurtunities/:id" component= {OppurtunityDetail} />
          
        </Switch>
      </div>
    )
  }
}