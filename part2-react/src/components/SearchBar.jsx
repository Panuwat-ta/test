import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", input);
    onSearch(input); // ส่งค่า input ไป
    
  };

  return (
    <form id="search-form" onSubmit={handleSubmit} >
      <input
        type="text"
        id="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., Chicken, Pasta, Thai..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
