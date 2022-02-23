import React from "react";

// user profile component

function UserProfile(props) {
  const { userImg, userName, userRole, email } = props;

  return (
    <div>
      <img src={userImg} alt="" />
      <h4>{userName}</h4>
      <h5>{userRole}</h5>
      <p>{email}</p>
    </div>
  );
}

export default UserProfile;
