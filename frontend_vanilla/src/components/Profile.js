import React from 'react'; 


const Profile = (props) => {
    // function Profile() {
    if (props.user) {
    return (
        <div>
            <h1>{props.user.username} is currently logged in</h1>
        </div>
    )
} else {
    return ( <div></div>
     ) }  
    }
export default Profile; 