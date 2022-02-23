import React, { useState } from "react";

function Setting() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    setInputs([...inputs, newEntry]);
  };
  return (
    <div>
      <h5>Change Password</h5>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="password"
            name="password"
            value={oldPassword}
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPssword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default Setting;
