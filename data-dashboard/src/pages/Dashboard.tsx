import React, { useEffect, useState } from 'react';
import ChartCard from '../components/ChartCard';
import { getMockData } from '../services/dataService';

const Dashboard: React.FC = () => {
  const [data, setData] = useState(getMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getMockData());
    }, 5000); // update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ChartCard title="User Activity" data={data} />
      <ChartCard title="Transactions" data={data} />
    </>
  );
};

export default Dashboard;
