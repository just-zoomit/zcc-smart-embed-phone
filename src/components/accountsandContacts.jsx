// src/SecondPage.jsx

import { Link } from "react-router-dom";
import "./accountsandContacts.css";
import { sampleContacts } from "../fakeData"; // Import the sample data

const AccountsandContacts = () => {
  // create an array of contacts
  const contacts = sampleContacts;

  const makeCall = (phone) => {
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

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Accounts</h3>

      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Active Account Info</p>
        </div>
        <div className="card-body">
          <div
            className="table-responsive table mt-2"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="accountsTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Account</th>
                  <th>Location</th>
                  <th>Orders</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td style={{ fontFamily: "Lato, sans-serif" }}>
                      <img
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                        src={`src/assets/img/${contact.name}.png`}
                        alt=""
                      />

                      <Link to={`/contact-details/${contact.id}`}>
                        {contact.name}
                      </Link>
                    </td>
                    <td>{contact.email}</td>
                    <td>{contact.account}</td>
                    <td>{contact.location}</td>
                    <td>{contact.orders}</td>
                    <td>
                      <a onClick={() => makeCall(contact.phone)} href="#">
                        {contact.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr></tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsandContacts;
