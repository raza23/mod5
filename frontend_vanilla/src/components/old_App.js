import React, { Component } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import OppurtunityContainer from "./OppurtunityContainer";
import AboutPage from "./AboutPage";
import OppurtunityDetail from "./OppurtunityDetail";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" exact component={OppurtunityContainer} />
          <Route path="/oppurtunities/:id" component= {OppurtunityDetail} />
        </Switch>
      </div>
      
      </Router>
    );
  }
}

export default App;
