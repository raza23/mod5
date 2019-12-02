import React from "react";
import OppurtunityListItem from "./OppurtunityListItem";

const OppurtunityList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.oppurtunities.map(opp => (
        <OppurtunityListItem
          key={opp.id}
          oppurtunity={opp}
        />
      ))}
    </div>
  </div>
);

export default OppurtunityList;
