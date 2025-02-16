import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../Redux/userSlice';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const timeoutRef = useRef(null); // Step 1

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value);
//     dispatch(setQuery(value)); // Dispatch immediately on input change
//   };

  // const handleChange = (e) => {
  //   const value = e.target.value; // step 2
  //   setInput(value); 

  //   // Clear the previous timeout (if any)
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   timeoutRef.current = setTimeout(() => {
  //     dispatch(setQuery(value)); // Dispatch the query to Redux store
  //   }, 1000); 

  // };

  const throttledtime =useRef(0)

  const handleChange = (e) => {
    const value = e.target.value; 
    setInput(value); 
     
    const date=Date.now();


    // Clear the previous timeout (if any)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(setQuery(value)); // Dispatch the query to Redux store
    }, 1000); 

  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search users..."
      />
    </div>
  );
};

export default SearchBar;

//by throtelling
// const SearchBar = () => {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();
  
//   const lastExecuted = useRef(0); // Stores the last execution time

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     const now = Date.now(); // Get current time
//     const throttleTime = 1000; // 1 second interval

//     if (now - lastExecuted.current >= throttleTime) {
//       dispatch(setQuery(value));
//       lastExecuted.current = now; // Update last execution time
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Search users..."
//       />
//     </div>
//   );
// };