import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountsandContacts from './components/accountsandContacts';
import ContactDetails from './components/contactDetails';
import CallLogs from './components/callLogs';
import Instructions from './components/Instructions';
import ZCCSmartEmbedDebug from './components/zccSmartEmbedDebug';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import './styles/main.css'; // Import global styles
import VerticalSidebar from './components/VerticalSidebar';
import SalesDashboard from './components/SalesDashboard'; // Import SalesDashboard (replace with your actual import)

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <div className={`App d-flex ${expanded ? 'expanded' : 'collapsed'}`}>
        {/* Left Sidebar */}
        <Sidebar />

        <div className="container-fluid flex-grow-1">
          <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100">
              <Navbar />
              <div className="row flex-grow-1">
                {/* Main Section */}
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <Routes>
                    <Route path="/" element={<SalesDashboard />} />
                    <Route path="/sales-dashboard" element={<SalesDashboard />} />
                    <Route path="/accounts" element={<AccountsandContacts />} />
                    <Route path="/contact-details/:id" element={<ContactDetails />} />
                    <Route path="/call-log" element={<CallLogs />} />
                    <Route path="/instructions" element={<Instructions />} />
                    <Route path="/seven" element={<ZCCSmartEmbedDebug />} />
                  </Routes>
                </div>

                {/* Right Sidebar */}
                <div className={`col-md-3 col-lg-2 ${expanded ? 'expanded' : 'collapsed'}`}>
                  <VerticalSidebar expanded={expanded} toggleSidebar={toggleSidebar} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;