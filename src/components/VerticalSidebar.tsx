import React, { useState } from 'react';
import './VerticalSidebar.css'; // Import the corresponding CSS file
import SmartEmbed from './smartembed';

const VerticalSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`vertical-sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        ☰ 
      </div>
      {isExpanded && <SmartEmbed />}
    </div>
  );
};

export default VerticalSidebar;
