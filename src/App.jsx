import  { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/main.css"; // Import global styles
import MainSection from "./components/MainSection/MainSection";
import VerticalSidebar from "./components/SideDrawer/VerticalSidebar";

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <div className={`App d-flex `}>
        <Sidebar />

        <MainSection expanded={expanded} />

        <div className={` col-lg-2 ${expanded ? "expanded" : "collapsed"}`}>
          <VerticalSidebar expanded={expanded} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Router>
  );
};

export default App;
