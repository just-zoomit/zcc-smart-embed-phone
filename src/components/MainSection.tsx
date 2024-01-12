import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountsandContacts from "./accountsandContacts";
import ContactDetails from "./contactDetails";
import CallLogs from "./callLogs";
import ZCCSmartEmbedDebug from "./zccSmartEmbedDebug";
import Navbar from "./NavBar";

const MainSection = ({ expanded }) => {
  return (
    <div className={` ${expanded ? "expanded" : "container-fluid"}`}>
      <div className="row ">
        <main>
          <Navbar />
          <div className="row flex-shrink-1">
            <Routes>
              <Route path="/" element={<AccountsandContacts />} />
              <Route path="/accounts" element={<AccountsandContacts />} />
              <Route path="/contact-details/:id" element={<ContactDetails />} />
              <Route
                path="/call-log"
                element={<CallLogs expanded={expanded} />}
              />
              <Route path="/seven" element={<ZCCSmartEmbedDebug />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainSection;
