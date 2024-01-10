import React, { useState } from 'react';
import './callLogs.css';
const CallLogs = ({ makeCall, clearCallLogs }) => {

    // create recentCalls array
     const recentCalls = [
    {
      engagementId: 1,
      callType: 'inbound',
      queue: 'Sales',
      fromNumber: '123-456-7890',
      toNumber: '987-654-3210',
      timestamp: '2021-01-01 12:00:00',
      duration: '00:00:30',
      dispositionCode: 'ANSWERED',
      notes: 'This is a note',
      recordingURL: 'https://www.google.com'
    },
]

const getRecordingURL = (engagementId) => {
    // Implement your getRecordingURL method
    console.log('Getting recording URL for engagement ID', engagementId);
  }



  return (
    <div  className="container-fluid">
      <h3 className="text-dark mb-4">Call Logs</h3>
      <button onClick={clearCallLogs}>Clear</button>
      <div className="card-body">
        <div className="table-responsive mb-0 pt-3 pe-2">
          <table className="table table-striped table-sm my-0 mydatatable">
            <thead>
              <tr>
                <th>Call Type</th>
                <th>Queue</th>
                <th>From</th>
                <th>To</th>
                <th>Date / Time</th>
                <th>Duration</th>
                <th>Engagement ID</th>
                <th>Disposition</th>
                <th>Notes</th>
                <th>Recording</th>
              </tr>
            </thead>
            <tbody>
              {recentCalls.map((call) => (
                <tr key={call.engagementId}>
                  <td>{call.callType}</td>
                  <td>{call.queue}</td>
                  <td>
                    {call.type === 'chat' ? (
                      <p>{call.fromNumber}</p>
                    ) : (
                      <a onClick={() => makeCall(call.number)} href="#">
                        {call.fromNumber}
                      </a>
                    )}
                  </td>
                  <td>
                    {call.type === 'chat' ? (
                      <p>{call.toNumber}</p>
                    ) : (
                      <a onClick={() => makeCall(call.number)} href="#">
                        {call.toNumber}
                      </a>
                    )}
                  </td>
                  <td>{call.timestamp}</td>
                  <td>{call.duration}</td>
                  <td>{call.engagementId}</td>
                  <td>{call.dispositionCode}</td>
                  <td>{call.notes}</td>
                  <td>
                    <a href={call.type !== 'chat' ? getRecordingURL(call.engagementId) : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {call.type !== 'chat' ? 'download' : ''}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
