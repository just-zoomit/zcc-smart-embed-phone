import { useState, useEffect } from "react";
import "./callLogs.css";
import { getItem, onMakeCall } from "../storageUtil";

// import { recentCalls } from "../../fakeData"; // Import the sample data

// eslint-disable-next-line react/prop-types
const CallLogs = ({ expanded }) => {
  const [recentCalls, setRecentCalls] = useState([]);

  useEffect(() => {
    const storedCallLogs = getItem("phoneCallLog");

    if (storedCallLogs) {
      setRecentCalls([storedCallLogs]);
    }
  }, []);

  const clearCallLogs = () => {
    console.log("Clearing call logs, recentCalls", recentCalls);
  };

  const getRecordingURL = (engagementId) => {
    const storedRecordingURL = getItem("callRecording");
    console.log("URL", storedRecordingURL.recordingUrl);
    setRecentCalls(storedRecordingURL);
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
                  <td>
                    {" "}
                    <a
                      onClick={() => onMakeCall(call.objectRecord.to)}
                      href="#"
                    >
                      {" "}
                      {call.objectRecord.to}{" "}
                    </a>{" "}
                  </td>
                  <td>
                    {" "}
                    <a
                      onClick={() => onMakeCall(call.objectRecord.to)}
                      href="#"
                    >
                      {" "}
                      {call.objectRecord.from}{" "}
                    </a>{" "}
                  </td>
                  <td>{call.objectRecord.wrapUpTimeDuration}</td>
                  <td>{call.objectRecord.wrapUpTimeDuration}</td>
                  <td>{call.engagementId}</td>
                  <td>{call.objectRecord.dispositionCode}</td>
                  <td>{call.objectRecord.notes}</td>
                  <td>
                    {" "}
                    <a
                      onClick={() => getRecordingURL(call.engagementId)}
                      href="#"
                    >
                      {" "}
                      {"TEMP URL"}{" "}
                    </a>{" "}
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
