import React, { useState } from 'react';

const ZCCSmartEmbedDebug = ({ zccSmartEmbedLogs, clearZCCSmartEmbedLogs }) => {
  const [pageView, setPageView] = useState('zccSmartEmbedDebug');

  return (
    <div style={{ display: pageView === 'zccSmartEmbedDebug' ? 'block' : 'none' }} className="container-fluid">
      <h3 className="text-dark mb-4">ZCC Smart Embed Debug</h3>
      <p>
        This section shows the JavaScript postMessages that are exchanged between this website and ZCC Smart Embed.
        Received messages are sent by Smart Embed to the parent website. Sent messages are sent by the website to Smart
        Embed.
      </p>
      <button onClick={clearZCCSmartEmbedLogs}>Clear</button>
      <hr />
      {zccSmartEmbedLogs.map((log, index) => (
        <div key={index} className="card bg-light mb-3">
          <div className="card-header">{log.direction}</div>
          <div className="card-body">
            <pre className="card-text">{JSON.stringify(log.payload, undefined, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZCCSmartEmbedDebug;
