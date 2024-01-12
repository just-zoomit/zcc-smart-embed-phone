import React, { useState } from "react";
import "./callLogs.css";
import { recentCalls } from "../../fakeData"; // Import the sample data

const CallLogs = ({ clearCallLogs, expanded }) => {
  const onMakeCall = (phone) => {
    const iframe = window.frames["zoom-embeddable-phone-iframe"];

    if (iframe) {
      if (iframe.contentWindow) {
        // If the iframe has already loaded, send the message
        console.log("iframe.contentWindow is available");
        iframe.contentWindow.postMessage(
          {
            type: "onclicktoact",
            data: { phone: phone },
          },
          "*"
        );

        console.log("Sending Message data=" + phone);
      } else {
        // If the iframe has not yet loaded, wait for the load event
        iframe.addEventListener("load", function () {
          iframe.contentWindow.postMessage(
            {
              type: "onclicktoact",
              data: { phone: phone },
            },
            "*"
          );
        });
      }
    } else {
      console.error("Iframe is not available");
    }
  };

  const getRecordingURL = (engagementId) => {
    // Implement your getRecordingURL method
    console.log("Getting recording URL for engagement ID", engagementId);
  };

  return (
    <div className={` ${expanded ? "col-lg-9" : "container-fluid"}`}>
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
                    {call.callType === "chat" ? (
                      <p>{call.fromNumber}</p>
                    ) : (
                      <a onClick={() => onMakeCall(call.toNumber)} href="#">
                        {call.fromNumber}
                      </a>
                    )}
                  </td>
                  <td>
                    {call.callType === "chat" ? (
                      <p>{call.toNumber}</p>
                    ) : (
                      <a onClick={() => onMakeCall(call.toNumber)} href="#">
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
                    {call.recordingURL ? (
                      <a
                        onClick={() => getRecordingURL(call.engagementId)}
                        href="#"
                      >
                        {call.callType !== "chat"
                          ? call.recordingURL
                          : "download"}
                      </a>
                    ) : (
                      ""
                    )}
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
