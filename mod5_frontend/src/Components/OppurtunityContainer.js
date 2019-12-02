import React from "react";
import { Route, Switch } from "react-router-dom";

import OppurtunitiesList from "./OppurtunitiesList";
import OppurtunityDetail from "./OppurtunityDetails";
// import PaintingForm from "./PaintingForm";
// import Searchbar from "./Searchbar";

const opp = 'http://localhost:3000/api/v1/oppurtunity'
// import paintingsData from "../paintings.json";

class OppurtunityContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      oppurtunities: [],
      search: ""
    };
  }


  componentDidMount() {
    fetch(opp) 
    .then(res => res.json())
    .then(opp_fetch =>
      this.setState({oppurtunities:opp_fetch}))
  } 

  // handleSearch = (e) => {
  //   this.setState({search: e.target.value})
  //   // console.log(this.state.term)
  // }





  render() {
    return (
      <div>
        <Switch>
          {/* <Route
            path="/oppurtunities/:oppurtunityId/edit" component={<OppurtunityForm/>} />
              
              
              
          <Route path="/oppurtunities/:oppurtunityId" component= {OppurtunityDetail} />
            }
          /> */}
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                {/* <Searchbar
                  // value={this.state.searchText}
                  // onChange={this.changeSearch}
                /> */}
                <OppurtunitiesList opp={this.state.oppurtunities}
                  // paintings={this.filteredPaintings()}
                />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default OppurtunityContainer;



