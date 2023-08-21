// Import the necessary modules and CSS styles for the Tooltip component
import React from 'react';
import './Tooltip.css';

// Define the Tooltip component using a functional component
const Tooltip = ({ text, children }) => {
  return (
    // Container for the tooltip
    <div className="tooltip-container">
      {/* Render the content that triggers the tooltip */}
      {children}
      {/* Tooltip content */}
      <div className="tooltip-text">
        {/* Display the provided 'text' inside the tooltip */}
        {text}
        {/* Create an arrow element for the tooltip */}
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  );
};

// Export the Tooltip component as the default export
export default Tooltip;
