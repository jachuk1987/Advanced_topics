export const getMockData = () => {
    const now = new Date();
    return Array.from({ length: 10 }, (_, i) => ({
      time: new Date(now.getTime() - i * 1000 * 60).toLocaleTimeString(),
      value: Math.floor(Math.random() * 100),
    })).reverse();
  };
  