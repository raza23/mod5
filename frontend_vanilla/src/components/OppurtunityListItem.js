import React from "react";
import { Link } from "react-router-dom";

const OppurtunityListItem = props => (
  
  <Link className="opp" to={`/oppurtunities/${props.oppurtunity.id}`}>
    <div className="content">
      <h2>{props.oppurtunity.id} - {props.oppurtunity.description}·{props.oppurtunity.date}</h2>
      <em>
        {/* {props.organization_id} */}
      </em>
    </div>
  </Link>
);

export default OppurtunityListItem;
