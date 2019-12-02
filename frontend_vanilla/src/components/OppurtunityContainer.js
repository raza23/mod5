import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom'
// import { Route, Switch } from "react-router-dom";

// import OppurtunityList from "./OppurtunityList";
// import OppurtunityDetail from "./OppurtunityDetail";
// import OppurtunityForm from "./OppurtunityForm";
// import Searchbar from "./Searchbar";
// import about from "./AboutPage";

const opp_url = 'http://localhost:3000/api/v1/oppurtunity'




function OppurtunityContainer() {
  useEffect(() => {
    fetchOpp();
  },[]);

  const [oppurtunities,setOppurtunities] = useState([]);

  const fetchOpp = async () => {
    const data = await fetch( opp_url);
  

    const oppurtunities = await data.json();
    // debugger
  console.log(oppurtunities)
  setOppurtunities(oppurtunities) 
};



return (
  
  <div>
    {/* <h1>Available Oppurtunities </h1> */}
    {oppurtunities.map(opp => (
      
      <h2 key={opp.id}>
      <Link to={`/oppurtunities/${opp.id}`}>{opp.id} - {opp.description} on {opp.date}</Link></h2>
    ))}

  </div>
    )

}




// class OppurtunityContainer extends React.Component {
//   state = {
//       oppurtunities: [],
//       searchText: ""
//     };
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     oppurtunities: [],
//   //     searchText: ""

//   //   }
//   // }
  

//   componentDidMount() {
//     fetch(opp_url)
//     .then(res => res.json())
//     .then(opp_fetch => {
//       this.setState({oppurtunities: opp_fetch})
//     })
//   }





//   updateOppInfo = (info) => {
//     let newOppArray = this.state.oppurtunities.map(opp => {
//       if (opp.id === info.oppId) {
//         return {
//           ...opp,
//           description: info.description,
//           date: info.date,
//           volunteers_needed: info.volunteers_needed,
//           organization: info.organization
          
//         };
//       } else {
//         return opp;
//       }
//     });

//     this.setState({ oppurtunities: newOppArray, editing: false });
//   };


  

//   changeSearch = searchText => {
//     this.setState({ searchText });
//   };

//   filteredOpp = () => {
//     // debugger
//     return this.state.oppurtunities.filter(
//       p =>
//         p.description.toLowerCase().includes(this.state.searchText.toLowerCase()) 
//     );
//   };

//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <Switch>
//           <Route
//             path="/oppurtunities/:oppurtunityId/edit"
//             render={props => {
//               let selectedOpp = this.state.oppurtunities.find(
//                 oppurtunity => oppurtunity.id === props.match.params.oppurtunityId
//               );
//               return (
//                 <OppurtunityForm oppurtunity={selectedOpp} updateOppInfo={this.updateOppInfo}/>
//               );
//             }}
//           />
//           <Route
//             path="/oppurtunities/:oppurtunityId"
//             render={props => {
//               // debugger
//               let selectedOpp = this.state.oppurtunities.find(
//                 oppurtunity => oppurtunity.id === props.match.params.oppurtunityId
                
//               );
//               return <OppurtunityDetail oppurtunity={selectedOpp} volunteer={this.VolForPainting}/>;
//             }}
//           />
//           <Route
//             path="/"
//             render={() => (
//               <div className="ui narrow container segment">
//                 <Searchbar
//                   value={this.state.searchText}
//                   onChange={this.changeSearch}
//                 />
//                 <OppurtunityList
//                   oppurtunities={this.state.oppurtunities}
//                 />
//               </div>
//             )}
//           />
//         </Switch>
//       </div>
//     );
//   }
// }



export default OppurtunityContainer;
