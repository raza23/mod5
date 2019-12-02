import React from 'react';
import OrgItem from './orgItem';

const OrgList = (props) => {
  // console.log(props)
  const orgs = props.orgs.map(org => (
     <OrgItem key={org.id} handleClick={props.detail} {...org} />
  ))
  
  return (
    <ul>
      {orgs}
      
    </ul>
  );
}

export default OrgList;