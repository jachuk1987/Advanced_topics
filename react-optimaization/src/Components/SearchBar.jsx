import React, { useRef, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Redux/userSlice";

const SearchBar = () => {
  const [immediateInput, setImmediateInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [throttledInput, setThrottledInput] = useState("");
  const dispatch = useDispatch();

  const debounceTimeoutRef = useRef(null);
  const lastExecutedRef = useRef(Date.now());

  // 🔴 Immediate Dispatch (No Debounce/Throttle)
  const handleImmediateChange = (e) => {
    const value = e.target.value;
    setImmediateInput(value);
    dispatch(setQuery(value));
  };

  // 🟢 Debounced Dispatch (Waits 1000ms)
  const handleDebouncedChange = useCallback((e) => {
    const value = e.target.value;
    setDebouncedInput(value);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      dispatch(setQuery(value));
    }, 1000);
  }, [dispatch]);

  // 🔵 Throttled Dispatch (Executes at most once per 1000ms)
  const handleThrottledChange = useCallback((e) => {
    const value = e.target.value;
    setThrottledInput(value);

    const now = Date.now();
    if (now - lastExecutedRef.current >= 1000) {
      dispatch(setQuery(value));
      lastExecutedRef.current = now;
    }
  }, [dispatch]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search Bar (Immediate, Debounce & Throttle)</h2>

      {/* 🔴 Immediate Input */}
      <div style={{ marginBottom: "10px" }}>
        <h3> Immediate Search Dispatch</h3>
        <input
          type="text"
          value={immediateInput}
          onChange={handleImmediateChange}
          placeholder="Search immediately..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* 🟢 Debounced Input */}
      <div style={{ marginBottom: "10px" }}>
        <h3> Debounced Search (1000ms Delay)</h3>
        <input
          type="text"
          value={debouncedInput}
          onChange={handleDebouncedChange}
          placeholder="Search with debounce..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>

      {/* 🔵 Throttled Input */}
      <div>
        <h3> Throttled Search (1 Update Per Second)</h3>
        <input
          type="text"
          value={throttledInput}
          onChange={handleThrottledChange}
          placeholder="Search with throttle..."
          style={{ padding: "8px", width: "300px", fontSize: "16px" }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
