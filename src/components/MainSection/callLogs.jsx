import { useState, useEffect } from "react";
import "./callLogs.css";
import { getItem } from "../storageUtil";

// import { recentCalls } from "../../fakeData"; // Import the sample data

const CallLogs = ({ expanded }) => {
  const [recentCalls, setRecentCalls] = useState([]);

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

  useEffect(() => {
    // Fetch call logs data from local storage when the component mounts
    const storedCallLogs = getItem("phoneCallLog");
    if (storedCallLogs) {
      // Add oject to an array and set it to state

      setRecentCalls([storedCallLogs]); // Make sure to put the merged object in an array
    }
  }, []);

  const clearCallLogs = () => {
    // Clear call logs in state and local storage
    console.log("Clearing call logs, recentCalls", recentCalls);
  };

  const getRecordingURL = (engagementId) => {
    // Implement your getRecordingURL method
    const recordingURL = getItem(engagementId);
    console.log("URL", recordingURL);
    setRecentCalls(recordingURL);
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
                  <td>{call.objectRecord.callType}</td>
                  <td>{call.objectRecord.callQueue}</td>
                  <td> <a onClick={() => onMakeCall(call.objectRecord.to)} href="#" > {call.objectRecord.to} </a> </td>
                  <td> <a onClick={() => onMakeCall(call.objectRecord.to)} href="#" > {call.objectRecord.from} </a> </td>
                  <td>{call.objectRecord.wrapUpTimeDuration}</td>
                  <td>{call.objectRecord.wrapUpTimeDuration}</td>
                  <td>{call.engagementId}</td>
                  <td>{call.objectRecord.dispositionCode}</td>
                  <td>{call.objectRecord.notes}</td>
                  <td> <a onClick={() => getRecordingURL(call.engagementId)} href="#" > {"TEMP URL"} </a> </td>
                  

                  <td>
                    {call.objectRecord.callType === "chat" ? (
                      <p>{call.objectRecord.from}</p>
                    ) : (
                      <a onClick={() => onMakeCall(call.to)}> {call.from} </a>
                    )}
                  </td>
                  <td>
                    {call.objectRecord.callType === "outbound" ? (
                      <p>{call.to}</p>
                    ) : (
                      <a onClick={() => onMakeCall(call.to)}> {call.to} </a>
                    )}
                  </td>

                  <td>
                    {call.recordingURL ? (
                      <a
                        onClick={() => getRecordingURL(call.engagementId)}
                        href="#"
                      >
                        {call.objectRecord.callType !== "chat"
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
