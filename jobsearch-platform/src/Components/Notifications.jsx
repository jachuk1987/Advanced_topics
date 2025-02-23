import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../features/notificationSlice';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Notifications</h2>
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