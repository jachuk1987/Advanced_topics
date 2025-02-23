import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/userSlice';

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
    </div>
  );
};

export default UserProfile;