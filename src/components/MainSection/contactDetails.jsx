import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem, onMakeCall } from "../storageUtil";

import { sampleContactLogs } from "../../fakeData"; // Import the sample data

const ContactDetails = () => {
  const [data, setData] = useState(getItem("userData") || []);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("ID:", data);

  const contact = data.find((c) => c.id.toString() === id) || {};

  const onGetContactLogs = (contactId) => {
    // Implement your getContactLogs method
    console.log("Getting contact logs for", contactId);

    return sampleContactLogs;
  };

  const onGetRecordingURLs = (engagementId) => {
    // Implement your getRecordingURLs method
    console.log("Getting recording URLs for", engagementId);
  };

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">
        {contact.name}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => navigate("/accounts")}
        ></button>{" "}
      </h3>
      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Contact Details</p>
        </div>
        <div className="card-body">
          <table>
            <tr>
              <td>
                <img
                  className="rounded-circle me-2"
                  width="100"
                  height="100"
                  src={`src/assets/img/${contact.name}.png`}
                  alt=""
                  onError={(e) => {
                    e.target.src = `/src/assets/img/default-icon.png`;
                  }}
                />
              </td>
              <td>
                <b>Email: </b>
                {contact.email}
                <br />
                <b>Phone: </b>
                <a onClick={() => onMakeCall(contact.phone)} href="#">
                  {contact.phone}
                </a>
                <br />
                <b>Account: </b> {contact.account}
                <br />
                <b>Location: </b> {contact.location}
                <br />
                <b>Orders: </b> {contact.orders}
                <br />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Communication Activity</p>
        </div>
        <div className="card-body">
          <div
            className="table-responsive table mt-2"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table table-striped table-sm my-0 mydatatable">
              <thead>
                <tr>
                  <th>Call Type</th>
                  <th>Queue</th>
                  <th>Date / Time</th>
                  <th>Duration</th>
                  <th>Engagement ID</th>
                  <th>Disposition</th>
                  <th>Notes</th>
                  <th>Recording URL</th>
                </tr>
              </thead>
              <tbody>
                {onGetContactLogs(contact.id).map((call) => (
                  <tr key={call.engagementId}>
                    <td>{call.callType}</td>
                    <td>{call.queue}</td>
                    <td>{call.timestamp}</td>
                    <td>{call.duration}</td>
                    <td>{call.engagementId}</td>
                    <td>{call.dispositionCode}</td>
                    <td>{call.notes}</td>
                    <td>
                      <a
                        href={
                          call.type !== "chat"
                            ? onGetRecordingURLs(call.engagementId)
                            : undefined
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {call.type !== "chat" ? "download" : ""}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
