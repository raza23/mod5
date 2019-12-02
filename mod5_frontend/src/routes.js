import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';
// import OrganizationsPage from './Components/organizationsContainer'
// import Oppurtunities from "./Components/OppurtunityContainer"

const Routes = (props) => {
  console.log(props)
  return (
    <Switch>
      <Route path="/signup" component={Pages.Signup} />
      <Route path="/login" component={Pages.Login} />
      <Route exact path="/" render={(user) => <Pages.Home user={props.user}/> } />
      {/* <Route exact path = "/organizations" component = {OrganizationsPage} />
      <Route exact path = "/oppurtunities" component = {Oppurtunities} /> */}


    </Switch>
  );
};

export default Routes;