import React from "react";
import OppurtunityItem from "./OppurtunityItem";
import {connect} from 'react-redux'

const OppurtunitiesList = props => {
  // console.log(props)

  return (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.opp.map(opp => (
        <OppurtunityItem
          key={opp.id}
          oppurtunity={opp}
        />
      ))}
    </div>
  </div>
)};


// const mapStateToProps = (state) => {
//   console.log(state)
  
//   return {
//     paintings: state.paintings.filter(
//       p =>
//         p.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
//         p.artist.name
//           .toLowerCase()
//           .includes(state.searchText.toLowerCase())
//     )
//   };

// }




// export default connect(mapStateToProps)(OppurtunitiesList);
export default (OppurtunitiesList)