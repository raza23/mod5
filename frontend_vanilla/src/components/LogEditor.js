import React, { Component } from 'react';

class LogEditor extends Component {

  state = {
    clockin: 'Clock In Time',
    clockout:  'Clockout Time'

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
      <form className="note-editor">
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