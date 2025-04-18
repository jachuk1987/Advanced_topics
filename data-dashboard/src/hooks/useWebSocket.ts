import { useEffect, useState } from 'react';
import { DataPoint } from '../types';

export const useWebSocket = (url: string) => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onmessage = (event) => {
      const parsedData: DataPoint = JSON.parse(event.data);
      setData((prev) => [...prev.slice(-49), parsedData]); // Keep only latest 50 points
    };

    return () => socket.close();
  }, [url]);

  return data;
};
