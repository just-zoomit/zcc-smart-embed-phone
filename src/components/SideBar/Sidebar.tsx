import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ zccSmartEmbedDebug }) => {
  
  

  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{ background: "#1a1647" }}>
  <div className="container-fluid d-flex flex-column p-0" >
          <div className="sidebar-brand-text justify-content-center align-items-center sidebar-brand m-0 mx-3" style={{ height: "100%" }}>
            <img src={`src/assets/img/zoomlly.png`} width="160" alt="" />
          </div>

        <ul className="navbar-nav text-light" id="accordionSidebar">
        
          <li className="nav-item" >
            <Link to="/accounts" className="nav-link" >
              <i className="fas fa-table"></i>
              <span style={{ fontFamily: 'Lato, sans-serif' }}>Accounts</span>
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/call-log" className="nav-link" >
              <i className="fas fa-phone"></i>
              <span style={{ fontFamily: 'Lato, sans-serif' }}>Call Log</span>
            </Link>
          </li>
          
        
          {zccSmartEmbedDebug && (
            <li className="nav-item" >
              <Link to="/zccSmartEmbedDebug" className="nav-link" >
                <i className="fas fa-log"></i>
                <span style={{ fontFamily: 'Lato, sans-serif' }}>Debug</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
