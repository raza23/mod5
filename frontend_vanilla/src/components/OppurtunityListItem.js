// import React from "react";
// import { Link } from "react-router-dom";

// const OppurtunityListItem = props => (
  
//   <Link className="opp" to={`/oppurtunities/${props.oppurtunity.id}`}>
//     <div className="content">
//       <h2>{props.oppurtunity.id} - {props.oppurtunity.description}·{props.oppurtunity.date}</h2>
//       <em>
//         {/* {props.organization_id} */}
//       </em>
//     </div>
//   </Link>
// );

// export default OppurtunityListItem;

import React from "react";
import { Link } from "react-router-dom";

// const OppurtunityListItem = props => (
  class OppurtunityListItem extends React.Component {
    
    
    render() {
      console.log(this.props)
      // let organization = this.props.orgs.filter(organization => organization.id === this.props.opp.organization_id)
      // let organization_name = organization.map(org => org.name)
      // console.log(organization_name)
      return (
        
        <Link className="item" to={`/oppurtunities/${this.props.opp.id}`}>
    <div className="content">
      <h2>{this.props.opp.description} on {this.props.opp.date}</h2>
      <em>
        {/* {organization_name} */}
        {this.props.opp.organization.name} - {this.props.opp.organization.description}
      </em>
    </div>
  </Link>

)

}
}

export default OppurtunityListItem;