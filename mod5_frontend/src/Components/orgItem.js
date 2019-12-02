import React from 'react';

const OrgItem = (props) => (
  
  // console.log(props)
  <li onClick={() => props.handleClick(props.id)}>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
  </li>
);

export default OrgItem;