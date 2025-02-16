import React, { useRef, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Redux/userSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [throttledInput, setThrottledInput] = useState("");
  const dispatch = useDispatch();

  const debounceTimeoutRef = useRef(null);
  const throttleTimeoutRef = useRef(null);
  const lastExecutedRef = useRef(Date.now());

  // 🔴 Immediate Dispatch (No Debounce/Throttle)
  const handleImmediateChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(setQuery(value)); // Dispatch immediately on input change
  };

  // 🟢 Debounced Dispatch (Waits 1000ms)
  const handleDebouncedChange = useCallback((e) => {
    const value = e.target.value;
    setInput(value);

    // Clear previous debounce timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setDebouncedInput(value);
      dispatch(setQuery(value)); // Dispatch after debounce delay
    }, 1000);
  }, [dispatch]);

  // 🔵 Throttled Dispatch (Executes at most once per 1000ms)
  const handleThrottledChange = useCallback((e) => {
    const value = e.target.value;
    setInput(value);

    const now = Date.now();
    if (now - lastExecutedRef.current >= 1000) { // Throttle time: 1000ms
      setThrottledInput(value);
      dispatch(setQuery(value)); // Dispatch every 1s
      lastExecutedRef.current = now;
    }
  }, [dispatch]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search Bar (Immediate, Debounce & Throttle)</h2>

      {/* 🔴 Immediate Search */}
      <div style={{ marginBottom: "10px" }}>
        <h3>🔴 Immediate Search Dispatch</h3>
        <input
          type="text"
          value={input}
          onChange={handleImmediateChange}
          placeholder="Search immediately..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* 🟢 Debounced Search */}
      <div style={{ marginBottom: "10px" }}>
        <h3>🟢 Debounced Search (1000ms Delay)</h3>
        <input
          type="text"
          value={input}
          onChange={handleDebouncedChange}
          placeholder="Search with debounce..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* 🔵 Throttled Search */}
      <div>
        <h3>🔵 Throttled Search (1 Update Per Second)</h3>
        <input
          type="text"
          value={input}
          onChange={handleThrottledChange}
          placeholder="Search with throttle..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* <p>🔹 <strong>Live Input:</strong> {input}</p>
      <p>🟢 <strong>Debounced Input:</strong> {debouncedInput} (Updates after 1s pause)</p>
      <p>🔵 <strong>Throttled Input:</strong> {throttledInput} (Updates every 1s while typing)</p> */}
    </div>
  );
};

export default SearchBar;
