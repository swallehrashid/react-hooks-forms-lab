import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
