import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";
import { setItem, getItem, onMakeCall } from "../storageUtil";
import "./accountsandContacts.css";

const AccountsandContacts = () => {
  const [data, setData] = useState(getItem("userData") || []);

  const [showForm, setShowForm] = useState(false);
  console.log("Contact Data:", data);

  const handleSaveData = (contact) => {
    const newId = uuidv4();
    const updatedContact = { id: newId, ...contact };

    const updatedData = [...data, updatedContact];
    setItem("userData", updatedData);

    setData(updatedData);
    setShowForm(false);
  };

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Accounts</h3>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add Contact"}
      </button>

      {showForm && <ContactForm onSaveContact={handleSaveData} />}

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
                {data.map((contact) => (
                  <tr key={contact.id}>
                    <td style={{ fontFamily: "Lato, sans-serif" }}>
                      <img
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                        src={`src/assets/img/${contact.name}.png`}
                        alt=""
                        onError={(e) => {
                          e.target.src = `src/assets/img/default-icon.png`;
                        }}
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
                      <a onClick={() => onMakeCall(contact.phone)} href="#">
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
