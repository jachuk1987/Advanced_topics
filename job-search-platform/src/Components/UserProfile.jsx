import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/profileSlice';

const UserProfile = () => {
  const { name, email } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateProfile({ [name]: value }));
  };

  return (
    <div className="mb-6 p-6 border rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full p-3 border rounded-md"
          name="name"
          value={name}
          onChange={handleProfileChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-3 border rounded-md"
          name="email"
          value={email}
          onChange={handleProfileChange}
        />
      </div>
    </div>
  );
};

export default UserProfile;
