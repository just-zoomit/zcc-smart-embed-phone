import React from 'react';
import './VerticalSidebar.css'; // Import the corresponding CSS file
import SmartEmbed from './smartembed';

const VerticalSidebar = ({ expanded, toggleSidebar }) => {
  return (
    <div className={`vertical-sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        ☰ 
      </div>
      {expanded && <SmartEmbed />}
    </div>
  );
};

export default VerticalSidebar;
