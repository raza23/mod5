import React from "react";
// import { Button } from "semantic-ui-react";
// import AuthFormOrg from './AuthForm_Org'

export default class Main extends React.Component {
  // state = {
  //     value: e.target.value
  // }

  onUserClick = e => {
    // debugger
    e.preventDefault();
    this.props.history.push("/login_user");
  };

  onOrgClick = e => {
    // debugger
    e.preventDefault();
    this.props.history.push("/login_org");
  };

  render() {
    return (
      <div id="main" class="text-center">
        {/* <button value={'Organization'} onClick={this.onOrgClick}>Organization</button> */}
        {/* <button value={'Organization'} render={() => <AuthFormOrg value ={'Organization'}/>}>Organization</button> */}
        <button
          //   variant="outline-primary"
          //   containerViewStyle={{ width: "10%", marginLeft: 0 }}

          class="ui huge red fluid button"
          value={"User"}
          onClick={this.onUserClick}
        >
          Volunteer Login
        </button>
        {/* <Button variant="outline-primary">Primary</Button> */}
        {/* <button >Fits to Container</button> */}
        {/* <Route exact path='/login_user' render={() => <AuthForm onChangeUser={this.onChangeUser}/>} */}
      </div>
    );
  }
}
