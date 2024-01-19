import{ useState } from 'react';
import { Link } from "react-router-dom";
import "./accountsandContacts.css";
import { sampleContacts } from "../../fakeData"; // Import the sample data
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

import { setItem, getItem} from '../storageUtil';

const AccountsandContacts = () => {
  const [data, setData] = useState(getItem('userData') || []); // Initialize with stored data
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  
  const [newContact, setNewContact] = useState({
    id: uuidv4(),
    name: '',
    email: '',
    account: '',
    location: '',
    orders: '',
    phone: '',
  });

  


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

  const handleSaveData = () => {
    const newId = uuidv4();
    const updatedContact = { ...newContact, id: newId};

    // Update the data state with the new contact
    const updatedData = [...data, updatedContact];
    console.log("Set Data: ",updatedData);
    setItem('userData', updatedData);

    setData(updatedData);

    // Reset the newContact state
    setNewContact({
      id: newId,
      name: '',
      email: '',
      account: '',
      location: '',
      orders: '',
      phone: '',
    });

      // Hide the form after saving
      setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the newContact state when input fields change
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Accounts</h3>

        {/* Button to toggle the contact form */}
        <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Contact'}
      </button>

    
        {/* Contact form */}
        {showForm && (
        <div className="contact-form">


        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="account"
            placeholder="Account"
            value={newContact.account}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newContact.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="orders"
            placeholder="Orders"
            value={newContact.orders}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleSaveData}>
            Save Contact
          </button>
        </form>


      </div>)}

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
