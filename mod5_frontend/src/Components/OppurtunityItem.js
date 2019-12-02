import React from "react";
import { Link } from "react-router-dom";

const OppurtunityItem = props => (
  <Link className="item" to={`/oppurtunities/${props.oppurtunity.id}`}>
    <div className="content">
      <h2>{props.oppurtunity.description}</h2>
      <em>
        {/* {props.painting.artist.name}·{props.painting.date} */}
      </em>
    </div>
  </Link>
);

export default OppurtunityItem;