import React, { useState, useEffect } from "react";

const TrafficSignal = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    // Function to randomly pick the next light
    const changeLight = () => {
      const lights = ["red", "yellow", "green"];
      const nextLight = lights[Math.floor(Math.random() * lights.length)];
      setCurrentLight(nextLight);
    };

    // Change light every 2 seconds
    const interval = setInterval(changeLight, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "red" ? "red" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "yellow" ? "yellow" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: currentLight === "green" ? "green" : "gray",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      ></div>
    </div>
  );
};

export default TrafficSignal;
