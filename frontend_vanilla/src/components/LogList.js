
import React from "react";
import LogItem from "./LogItem"
// import { Link } from "react-router-dom";

class LogList extends React.Component {
    state = { 
        edit: false
    }

    SaveEditLog = (editLogID,editclockin,editclockout) => {
        // debugger
        const log = {
          
          
          clockin: editclockin,
          clockout: editclockout,
         
          user: this.props.user
          
          }
          fetch(`http://localhost:3001/api/v1/notes/${editLogID}`, {
            
            method: 'PATCH',
            headers: {
              
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            
            body: JSON.stringify(log)
          }).then(console.log('editted'))
          }
      
      
      handleLog = () => {
        this.setState(state => ({
          edit: !state.edit
        }))
      }
    
    
    render() {
        const mylogs = this.props.logs.filter(log => log.user_id === this.props.user.id)
        const indLogs = mylogs.map(oneLog => {
            return <LogItem  user={this.props.user} key={oneLog.id} {...oneLog} />
        })
        console.log(this.props)
        console.log(mylogs)
        console.log(indLogs)
    // console.log(this.state)
    // const name = this.props.user === undefined || null ?  (<div></div>) : this.props.user.name
    return (
        <div>

            {indLogs} 
        </div>
      );
    }
  }
  
  export default LogList;