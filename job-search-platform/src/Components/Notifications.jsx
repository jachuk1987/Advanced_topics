import React from 'react';
import { useSelector } from 'react-redux';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    <div className="mb-6 p-6 border rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2 p-2 border rounded-md">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
