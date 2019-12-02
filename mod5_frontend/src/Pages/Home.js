import React from 'react';
import { useSelector } from 'react-redux';

const Home = (props) => {
  console.log(props)
  // debugger
  // debugger
  // const username = props.user
  // console.log(username)
  const text = props.user? (
    <h1>{props.user.username} is currently logged in</h1>
    ) : (
      <h1>Nobody is logged in</h1>
  );
  return <div>{text}</div>;
};

export default Home;