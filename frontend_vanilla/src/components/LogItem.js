import React from 'react';
import LogEditor from './LogEditor'


class LogItem extends React.Component {

    state = { 
        edit: false
    }

    saveEditLog = (editLogID,editclockin,editclockout) => {
        // debugger
        // debugger
        const log = {
          
          
          clockin: editclockin,
          clockout: editclockout,
         
          user: this.props.user
          
          }
          fetch(`http://localhost:3000/api/v1/logs/${editLogID}`, {
              method: 'PATCH',
              headers: {
              
                "Authorization": `Bearer ${localStorage.jwt}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            
            body: JSON.stringify({log})
          }).then(res => res.json())
          .then(console.log)
          }
      
      
      handleLog = () => {
          console.log('hey')
        this.setState(state => ({
          edit: !state.edit
        }))
      }

    // handleClick = 

    render() {
        const clockin = this.props.clockin === '' ? 'Please ClockIn' : this.props.clockin
        const clockout = this.props.clockout === '' ? 'Please ClockOut' : this.props.clockout
        console.log(this.props.id)
    return (
    //   <Fragment>
    <div>

        <h3>{this.props.oppurtunity.date} - {this.props.oppurtunity.description} - <button onClick={this.handleLog}> {clockin} - {clockout} </button> </h3>
        {this.state.edit ? <LogEditor saveEdit={this.saveEditLog} user={this.props.user} logid={this.props.id} handleLog={this.handleLog}/> : null}
    </div>
    //   </Fragment>
    );
  }}

  export default LogItem