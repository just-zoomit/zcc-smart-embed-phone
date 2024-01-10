import React, { useState } from 'react';

const Instructions = () => {
 

  return (
    <div  className="container-fluid">
      <h3 className="text-dark mb-4">ZCC Smart Embed Instructions</h3>
      <p>This is a temporary page for ZCC Smart Embed testing. The goal will be to eventually migrate this to SEDP.</p>
      <hr />
      <h4>Support Channels</h4>
      <ul>
        <li>Voice</li>
        <li>Web Chat</li>
      </ul>
      <hr />
      <h4>Setup:</h4>
      <ul>
        <li>You can edit your Local Storage to create a contact on the accounts page for click to call</li>
        <li>To enable debug click, <a href="?debug=1">this link</a></li>
        <li>To test on GO use, <a href="?cluster=go&debug=1">this link</a></li>
        <li>
          To test this on your Zoom account, you must enable the Smart Embed OP flag and then add the Smart Embed
          integration
        </li>
      </ul>
      <hr />
      <h4>Known Issues:</h4>
      <ul>
        <li>The Relate To dropdown on post call wrap-up screen is not working</li>
        <li>Inbound voice calls are not resolving against the local Accounts table.</li>
        <li>
          Sometimes it seems that timestamps are in an inconsistent format. If you see this, please screenshot and
          send it to Justin.
        </li>
      </ul>
      <hr />
      
      <p>Please contact Zoom sales with any questions.</p>
    </div>
  );
};

export default Instructions;
