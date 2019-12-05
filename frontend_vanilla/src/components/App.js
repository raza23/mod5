import React from 'react';
// import { MapInteractionCSS } from 'react-map-interaction';

import { Switch, Route, Redirect } from 'react-router-dom'; 

import AuthForm from './AuthForm';  
import AuthFormOrg from './AuthForm_Org'
// import Profile from './Profile'; 
import Main from "./Main"
import NavBar from "./Navbar"
// import OppurtunityContainer from "./OppurtunityContainer"
// import OppurtunityDetail from "./OppurtunityDetail"
import OppurtunityList from "./OppurtunityList";
import OppurtunityDetail from "./OppurtunityDetail";
import SignUpForm from "./SignUpForm"
// import OppurtunityForm from "./OppurtunityForm";
import Header from "./Header"
import LogList from "./LogList"
// import LogEditor from "./LogEditor"

import "../App.css"

const USER_PROFILE_URL = 'http://localhost:3000/api/v1/userprofile'
const ORG_PROFILE_URL = 'http://localhost:3000/api/v1/orgprofile'
const opp_url = 'http://localhost:3000/api/v1/oppurtunity'
const org_url =  'http://localhost:3000/api/v1/organizations'
const Log_URL = 'http://localhost:3000/api/v1/logs'




// import './Styling/App.css';
 
export default class App extends React.Component {

  state = {
    // userlogin: false,
    oppurtunities: [],
    organization: [],
    logs: [],
    // edit: false, 
    currentUser: null,
    
  }

  componentDidMount(){
    let token = localStorage.getItem('jwt')
    console.log(token)
    

    if(token) {
    Promise.all([
      fetch(opp_url),
      fetch(org_url),
      fetch(Log_URL),
      fetch(USER_PROFILE_URL, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data =>  {
        // debugger
        this.onChangeUser(data.user_data)})
    ])
    .then(([res1, res2,res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
  .then(([data1, data2,data3]) => this.setState({
      oppurtunities: data1, 
      organizations: data2,
      logs: data3
  }));
}}

// SaveEditLog = (editLogID,editclockin,editclockout) => {
//   // debugger
//   const log = {
    
    
//     clockin: editclockin,
//     clockout: editclockout,
   
//     user: this.props.user
    
//     }
//     fetch(`http://localhost:3001/api/v1/notes/${editLogID}`, {
      
//       method: 'PATCH',
//       headers: {
        
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
      
//       body: JSON.stringify(log)
//     }).then(console.log('editted'))
//     }


// handleLog = () => {
//   this.setState(state => ({
//     edit: !state.edit
//   }))
// }
// }
  //   .then(([res1, res2,res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
  //   .then(([data1, data2]) => this.setState({
  //       oppurtunities: data1, 
  //       organizations: data2
  //   }).then(data3 =>{
  //     this.onChangeUser(data3.user_data)
  //   }) );
  // }}
  
  // changeSearch = searchText => {
  //   this.setState({ searchText });
  // };
  // componentDidMount() {
  //   let token = localStorage.getItem('jwt')
  //   console.log(token)
    

  //   if(token){
      
  //     fetch(USER_PROFILE_URL, {
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(data =>  {
  //       // debugger
  //       this.onChangeUser(data.user_data)})
      
  //   }
  // }

  onChangeUser = (user) => {

    this.setState({currentUser: user,
      userlogin:true})
    // debugger
  }

  // onChangeOrg = (org)

  

//   render() {
//     console.log(this.state)
//     return (
//       <div className='App'>
//         <NavBar />
//         <br></br>
//         <Switch> 
        // {/* <Route exact path='/' render={() => <Redirect to="/login_user"  />} /> */}
        //   {/* <Route exact path='/' render={() => <Redirect to="/login_user"  />} /> */}
        //   {/* {USER LOGIN} */}
          // <Route path="/" exact component={Main} />
          // <Route exact path='/login_user' render={() => <AuthForm onChangeUser={this.onChangeUser}/>} />
          // <Route exact path='/login_org' render={() => <AuthFormOrg onChangeUser={this.onChangeUser}/>} />

//            <Route exact path='/profile' render={() => <Profile user={this.state.currentUser} /> } />
//            <Route path="/oppurtunities" exact component={OppurtunityContainer} />
//           <Route path="/oppurtunities/:id" component= {OppurtunityDetail} />
          
//         </Switch>
//       </div>
//     )
//   }
// }

render() {
  console.log(this.state)
  let allOppurtunities = [...this.state.oppurtunities]
  // let user = this.state.currentUser === null ? null : this.state.currentUser
  return (
    <div>
      <NavBar user={this.state.currentUser} />
      {/* <Header user={this.state.currentUser} /> */}
      <Switch>
      <Route path="/" exact component={Main} />
          <Route exact path='/login_user' render={() => <AuthForm onChangeUser={this.onChangeUser}/>} />
          <Route exact path='/login_org' render={() => <AuthFormOrg onChangeUser={this.onChangeUser}/>} />
        {/* <Route
          path="/oppurtunities/:oppurtunityId/edit"
          render={props => {
            let selectedOppurtunity = allOppurtunities.find(
              opp => opp.id === props.match.params.oppurtunityId
            );
            return (
              <OppurtunityForm oppurtunity={selectedOppurtunity} 
              
              />
            );
          }}
        /> */}
        <Route
          path="/oppurtunities/:oppurtunityId"
          render={props => {
            let selectedOppurtunity = allOppurtunities.find(
              opp => opp.id == props.match.params.oppurtunityId
              );
            
            
              // debugger
            return <OppurtunityDetail 
            logs={this.state.logs}
            oppurtunity={selectedOppurtunity} 
            user={this.state.currentUser}
            
            />;
            
          }}
        />
        <Route exact path='/signup' component={SignUpForm} />
        {/* <Route
            path="/logs/:logId/edit"
            render={props => {
              debugger
              let selectedlog = this.state.logs.find(
                log => log.id === props.match.params.logId
              );
              return (
                <LogEditor log={selectedlog} 
                // updatePaintingInfo={this.updatePaintingInfo}
                />
              );
            }}
          /> */}
          <Route exact path='/logs' render={() => <LogList 
          
          logs={this.state.logs}
          user={this.state.currentUser}/>} />
        <Route
          path="/Home"
          render={() => (
            <div className="ui narrow container segment">
              {/* <Searchbar
                value={this.state.searchText}
                onChange={this.changeSearch}
              /> */}
              <OppurtunityList
                

                user={this.state.currentUser}
                opps={this.state.oppurtunities}
                orgs ={this.state.organizations}
              />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}
}