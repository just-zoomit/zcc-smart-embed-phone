import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // create an array of contacts
  const contact =
    [
      {
        id: 1,
        name: "Maurice Lawson",
        email: "donte.zoomie@gmail.com",
        account: "67890",
        location: "Town",
        orders: 15,
        phone: "9174994441",
      },
      {
        id: 2,
        name: "Ashlee York",
        email: "jane@example.com",
        account: "67890",
        location: "Town",
        orders: 15,
        phone: "987-654-3210",
      },
      {
        id: 3,
        name: "Simu Liu",
        email: "john@example.com",
        account: "18945",
        location: "City",
        orders: 10,
        phone: "123-456-7890",
      },
    ].find((c) => c.id.toString() === id) || {};

  console.log("contact", contact);

  // create MakeCall, GetContactLogs, GetRecordingURLs functions
  const onMakeCall = (phone:string) => {
    
  
    const iframe = window.frames['zoom-embeddable-phone-iframe']
  
    if (iframe) {
      if (iframe.contentWindow) {
        // If the iframe has already loaded, send the message
        console.log("iframe.contentWindow is available");
        iframe.contentWindow.postMessage(
          {
            type: "onclicktoact",
            data: {phone:phone},
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
              data: { phone:"9174994441" },
            },
            "*"
          );
        });
      }
    } else {
      console.error("Iframe is not available");
    }
  };
  


  const onGetContactLogs = (contactId) => {
    // Implement your getContactLogs method
    console.log("Getting contact logs for", contactId);
    return [
      {
        callType: "inbound",
        queue: "Sales",
        timestamp: "2021-08-20 12:00:00",
        duration: "00:01:00",
        engagementId: "168545",
        dispositionCode: "Closed",
        notes: "This is a note",
        type: "voice",
      },
      {
        callType: "inbound",
        queue: "Sales",
        timestamp: "2021-08-20 12:00:00",
        duration: "00:01:00",
        engagementId: "165845",
        dispositionCode: "Closed",
        notes: "This is a note",
        type: "voice",
      },
      {
        callType: "inbound",
        queue: "Sales",
        timestamp: "2021-08-20 12:00:00",
        duration: "00:01:00",
        engagementId: "189745",
        dispositionCode: "Closed",
        notes: "This is a note",
        type: "voice",
      },
    ];
  };

  const onGetRecordingURLs = (engagementId) => {
    // Implement your getRecordingURLs method
    console.log("Getting recording URLs for", engagementId);
  };

  useEffect(() => {
    // You can use the 'contactDetails' here to populate your component
    console.log("Details HERE:", contact);
  }, [contact]);

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
                  src={`/src/assets/img/${contact.name}.png`}
                  alt=""
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
                            : undefined}
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
