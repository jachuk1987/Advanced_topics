import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification, removeNotification } from '../redux/notificationSlice';

const Notifications = () => {
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();
    const [newNotification, setNewNotification] = useState('');
  
    const handleAddNotification = () => {
      if (newNotification) {
        dispatch(addNotification({ id: Date.now(), message: newNotification }));
        setNewNotification('');
      }
    };
  
    return (
      <div>
        <h2>Notifications</h2>
        <input
          type="text"
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
          placeholder="New Notification"
        />
        <button onClick={handleAddNotification}>Add Notification</button>
        <ul>
          {notifications.map((note) => (
            <li key={note.id}>
              <p>{note.message}</p>
              <button onClick={() => dispatch(removeNotification(note.id))}>Dismiss</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notifications;