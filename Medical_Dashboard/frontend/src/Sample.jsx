import React, { useState } from "react";

const MaxDistanceSeat = () => {
  const [seats, setSeats] = useState([1, 0, 0, 0, 1, 0, 1]); // Example seats
  const [maxDistance, setMaxDistance] = useState(0);

  // Function to find the maximum distance
  const findMaxDistance = () => {
    let last = -1, maxDist = 0, n = seats.length;

    for (let i = 0; i < n; i++) {
      if (seats[i] === 1) {
        if (last === -1) maxDist = i; // Distance from the start
        else maxDist = Math.max(maxDist, Math.floor((i - last) / 2)); // Mid-gap distance
        last = i;
      }
    }

    // Check distance at the end
    maxDist = Math.max(maxDist, n - 1 - last);
    setMaxDistance(maxDist);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Seats:</h3>
      <p>{seats.map(seat => (seat ? "" : "")).join(" ")}</p>
      <button onClick={findMaxDistance}>Find Best Seat</button>
      <h3>Max Distance: {maxDistance}</h3>
    </div>
  );
};

export default MaxDistanceSeat;
