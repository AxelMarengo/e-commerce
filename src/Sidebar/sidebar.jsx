import "./sidebar.css"
import React, { useState } from 'react';


function Sidebar() {

  const [rangeValue, setRangeValue] = useState(200);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="section">
        <h5 className="pb-1">Category</h5>
        <div className="pb-1">
          <input type="checkbox" />All
        </div>
        <div className="pb-1">
          <input className="" type="checkbox" />Sneakers
        </div>
        <div className="pb-1">
          <input type="checkbox" />Flat
        </div>
        <div className="pb-1">
          <input type="checkbox" />Sandals
        </div>
        <div className="pb-1">
          <input type="checkbox" />Heels
        </div>
      </div>
      <div className="section">
        <label htmlFor="rangeInput">Select max price:</label>
        <input
          className="range"
          type="range"
          id="rangeInput"
          min="0"
          max="100"
          step="1"
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <p>Selected value: ${rangeValue}</p>
      </div>
      <div className="section">
        <h5>Color</h5>
        <div>
          <input type="checkbox" />Blue
        </div>
        <div>
          <input type="checkbox" />Red
        </div>
        <div>
          <input type="checkbox" />Yellow
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
