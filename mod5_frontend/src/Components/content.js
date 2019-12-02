import React, { Component } from 'react';
// import NoteEditor from './NoteEditor';
import OrgViewer from './orgViewer';
// import orgViewer from './orgViewer';
// import Instructions from './Instructions';
// import CreateForm from './CreateForm'

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    
      return <OrgViewer
      // newNote = {this.props.newNote}
      org={this.props.org}
    //   handleEdit = {this.props.handleEdit}
    //   SaveEdit = {this.props.SaveEdit}
    //   deleteNote={this.props.deleteNote}
      />
      
      
    } 

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;