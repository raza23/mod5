import React from 'react';
// import AuthFormOrg from './AuthForm_Org'


export default class Main extends React.Component {
    // state = { 
    //     value: e.target.value
    // }

    onUserClick = (e) => {
        // debugger
        e.preventDefault()
        this.props.history.push('/login_user')
    }

    onOrgClick = (e) => {
        // debugger
        e.preventDefault()
        this.props.history.push('/login_org')
    }
    render(){
        return (
            <div id='main'>
                <button value={'Organization'} onClick={this.onOrgClick}>Organization</button>
                {/* <button value={'Organization'} render={() => <AuthFormOrg value ={'Organization'}/>}>Organization</button> */}
                <button value={'User'} onClick={this.onUserClick}>User</button>
                {/* <Route exact path='/login_user' render={() => <AuthForm onChangeUser={this.onChangeUser}/>} */}
            </div>
        )
    }
}