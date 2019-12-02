import React, { Component } from 'react';
import OrgList from './orglist';

class Sidebar extends Component {
  render() {
    // console.log(this.props)
    // const notes=this.props 
    return (
      <div className='master-detail-element sidebar'>
        <OrgList orgs={this.props.orgs} 
        
        detail={this.props.detail} />
        
      </div>
    );
  }
}

export default Sidebar;