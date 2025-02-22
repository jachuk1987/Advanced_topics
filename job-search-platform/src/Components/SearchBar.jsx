import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/jobSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.jobSearch.searchQuery);

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-80 p-3 border rounded-md shadow-md"
        placeholder="Search Jobs..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
