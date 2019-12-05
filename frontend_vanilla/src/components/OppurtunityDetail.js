import React from "react";
import { withRouter } from 'react-router-dom';

// import { Link } from "react-router-dom";
const Log_URL = 'http://localhost:3000/api/v1/logs'


class OppurtunityDetail extends React.Component {
  state = {
    logs: this.props.logs
  }

  SignUp = (newSignup) => {
    debugger
    console.log('click')
    const signup = {
      clockin: '',
      clockout: '',
      oppurtunity: this.props.oppurtunity,
      user: this.props.user
    }
  
  fetch(Log_URL, {
    
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
      body: JSON.stringify(signup)})
      .then(res => res.json())
      .then(newSignup => 
        
        {this.setState({logs:[...this.state.logs,newSignup]})})
        this.props.history.push('/logs')

        // debugger
  }



  render() {
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.oppurtunity.description}</h1>

      <h2>Organization: {this.props.oppurtunity.organization.name}</h2>
      <button onClick={this.SignUp}>Click to Sign Up</button>
      </div>
      );
    }
  }
  
  export default withRouter(OppurtunityDetail);


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




