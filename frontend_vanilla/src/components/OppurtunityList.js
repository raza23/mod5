import React from "react";
import OppurtunityListItem from "./OppurtunityListItem";

// const OppurtunityList = props => (
  class OppurtunityList extends React.Component {
    render() {
      // console.log(this.props)

return (
  <div className="ui container">
    <div className="ui celled selection list">
      {/* <h1>{this.props.u}</h1>  */}
      {this.props.opps.map(opp => (
        <OppurtunityListItem
        user={this.props.user}
          orgs = {this.props.orgs}
          key={opp.id}
          opp={opp}
        />
      ))}
    </div>
  </div>
)
      }}
export default OppurtunityList;



// import React from "react";
// import OppurtunityListItem from "./OppurtunityListItem";

// const OppurtunityList = props => (
//   <div className="ui container">
//     <div className="ui celled selection list">
//       {props.oppurtunities.map(opp => (
//         <OppurtunityListItem
//           key={opp.id}
//           oppurtunity={opp}
//         />
//       ))}
//     </div>
//   </div>
// );

// export default OppurtunityList;
