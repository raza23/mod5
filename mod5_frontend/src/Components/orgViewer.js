import React, { Fragment } from 'react';

const orgViewer = (props) => {
  // console.log(props)
  return (
    <Fragment>
      <h2>{props.org.name}</h2>
      {/* <p>{props.note.body}</p> */}
      
      
      {/* <button onClick={props.handleEdit}>Edit</button>
      <button type="button" onClick={props.deleteNote}>Delete</button> */}
    </Fragment>
  );
}

export default orgViewer;