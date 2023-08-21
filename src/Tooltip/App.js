// Import the necessary modules and components
import React, { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';

// Define the main component 'App'
const App = () => {
  // Initialize a state variable 'backgroundColor' using the useState hook
  const [backgroundColor, setBackgroundColor] = useState('');

  // Function to handle button hover
  const handleButtonHover = () => {
    // Change the background color using a radial gradient on hover
    setBackgroundColor('radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)');
  };

  // Function to handle button leave (hover out)
  const handleButtonLeave = () => {
    // Reset the background color when leaving the hover state
    setBackgroundColor('');
  };

  // Render the component
  return (
    // Main container with dynamic background based on 'backgroundColor' state
    <div className='app' style={{ backgroundImage: backgroundColor }}>
      {/* Use the 'Tooltip' component with a custom text */}
      <Tooltip text={<span>Thanks for hovering!<br />I'm a tooltip. &#128591;&#128525; </span>}>
        {/* Div that triggers hover effect */}
        <div
          className='hovering'
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Hover over me!
        </div>
      </Tooltip>
    </div>
  );
};

// Export the 'App' component as the default export
export default App;
