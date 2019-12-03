import React from "react";
// import { Link } from "react-router-dom";

class OppurtunityDetail extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.oppurtunity.description}</h1>
      <button>Click to Sign Up:{this.props.oppurtunity.volunteers_needed}</button>
      </div>
      );
    }
  }
  
  export default OppurtunityDetail;


// / // import { Link } from "react-router-dom";
// import React, {useState,useEffect} from "react";
// // const opp_url = 'http://localhost:3000/api/v1/oppurtunity'






// function OppurtunityDetail({match}) {
//   useEffect(() => {
//     fetchOpp()
//     console.log(match)
//   },[])

//   const [opp,setOpp] = useState({});

//   const fetchOpp = async () => {
//     const fetchOpp = await fetch( `http://localhost:3000/api/v1/oppurtunity/${match.params.id}`);
//     const opp = await fetchOpp.json()
  

//     // const oppurtunities = await data.json();
//     // debugger
//   setOpp(opp)
//   console.log(opp.oppurtunity)
//   console.log(opp.organization)
//   // setOppurtunities(oppurtunities) 
// };


// // function handleClick  (e) {
// //   console.log('clicked')
// // }


// return (
  
//   <div>
//     {opp.oppurtunity && opp.organization &&
//     <div><h1>Organization: {opp.organization.name}</h1>
//     <h2> {opp.organization.description} </h2>
//     <h3> {opp.oppurtunity.description} on {opp.oppurtunity.date}</h3>
//     <button >Click to Volunteer: {opp.oppurtunity.volunteers_needed}</button>
//     </div>
// } 
//     {/* <h1>Available Oppurtunities </h1>
//     <h1>{opp.description} ~ {opp.date} </h1>
//     {/* <h1>{opp.organization.name}</h1> */}

//   </div>
//     )

// }




















// export default OppurtunityDetail;
// class OppurtunityDetail extends React.Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         {/* <img alt={this.props.painting.title} src={this.props.painting.image} /> */}
//         <h3>{this.props.oppurtunity.description}</h3>
//         <h4>
//           {this.props.painting.artist.name}{" "}
//           {this.props.painting.artist.birthday}-{
//             this.props.painting.artist.deathday
//           }
//         </h4>
//         <Link to={`/paintings/${this.props.painting.id}/edit`}>
//           <button className="ui button">Edit</button>
//         </Link>
//         <button
//           className="ui button"
//           onClick={() => {this.props.vote(this.props.painting.id)}}
//         >
//           Volunteer! {this.props.painting.votes}
//         </button>
//       </div>
//     );
//   }
// }




