import React from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component file path
import Navbar from './NavBar'; // Import your Navbar component file path
import './Home.css';

const Home = (props) => {
  // Destructure your props as needed

  return (
    <div id="wrapper">
      <Sidebar {...props} />
      <div className="d-flex flex-column" id="content-wrapper">
        <Navbar {...props} />
        {/* The rest of your Home page content */}
      </div>
    </div>
  );
};

export default Home;
