import React, { Component } from 'react';
import {For,Button} from 'semantic-ui-react'

class LogEditor extends Component {

  state = {
    // clockin: 'H:mm',
    // clockout:  'H:mm'
    clockin: this.props.log.clockin !== '' ? this.props.log.clockin : 'H:mm',
    clockout: this.props.log.clockout !== '' ? this.props.log.clockout : 'H:mm'

  }

  handleClockinChange = (e) => {
    this.setState({clockin: e.target.value})
  }

  handleClockoutChange = (e) => {
    
    this.setState({clockout: e.target.value})
  }




  render() {
    console.log(this.props)
    return (
      <form class="ui form">
         <input type="text" name="clockin" value = {this.state.clockin} onChange={this.handleClockinChange}/>
        <input type="text" name="clockout" value = {this.state.clockout} onChange={this.handleClockoutChange}/>

    
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={() => this.props.saveEdit(this.props.logid,this.state.clockin,this.state.clockout,this.props.user)} />
          {/* <button type="button" onClick={this.props.deleteNote}>Delete</button> */}
        </div>
      </form>
    );
  }
}

export default LogEditor;