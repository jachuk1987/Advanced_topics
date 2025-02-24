import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';

const UserProfile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState(user);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    };
  
    const handleSave = () => {
      dispatch(updateUser(userInfo));
      setEditMode(false);
    };
  
    return (
      <div>
        <h2>User Profile</h2>
        {editMode ? (
          <div>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name || 'N/A'}</p>
            <p><strong>Email:</strong> {user.email || 'N/A'}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    );
  };
  
  export default UserProfile;