import React from 'react';
import LogEditor from './LogEditor'
import moment from "moment";
// import { Segment,Button } from 'semantic-ui-react'



class LogItem extends React.Component {

    state = { 
        edit: false,
        selectedlog: {}
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

        DeleteLog = () => {
            // debugger
            fetch(`http://localhost:3000/api/v1/logs/${this.props.id}`, {
                method: 'DELETE',
                headers: {
                
                  "Authorization": `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              
              
            }).then(res => res.json())
            window.location.reload()
        }
    
        // detail = (id) => {
            
        //     this.setState({
                
        //       selectedlog: this.props.logs.find(log => log.id === id),
        //       // selectedNote: note,
        //       edit: false
        //     })
        //   }
      
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
        console.log(this.state)
       
        // parse time using 24-hour clock and use UTC to prevent DST issues
var start = moment.utc(this.props.clockin, "hh:mm");
var end = moment.utc(this.props.clockout, "hh:mm");

// account for crossing over to midnight the next day
if (end.isBefore(start)) end.add(1, 'day');

// calculate the duration
var d = moment.duration(end.diff(start));

// subtract the lunch break
// d.subtract(30, 'minutes');

// format a string result
var s = moment.utc(+d).format('h:mm');
console.log(s)

    return (
    //   <Fragment>
    <div class="ui segment">

        <h3><button class="ui positive button,ui huge button"  onClick={this.handleLog}>{this.props.oppurtunity.date} - {this.props.oppurtunity.description} -  {s=== 'Invalid date'  ? {clockin} - {clockout} : s} </button> <button class="ui negative button,ui big button" onClick={() => this.DeleteLog()}>Delete</button> </h3>
        {this.state.edit ? <LogEditor saveEdit={this.saveEditLog} user={this.props.user} logid={this.props.id} handleLog={this.handleLog}/> : null}
    </div>
    //   </Fragment>
    );
  }}

  export default LogItem