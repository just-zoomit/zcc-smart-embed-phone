import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
const ContactForm = ({ onSaveContact }) => {
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    account: '',
    location: '',
    orders: '',
    phone: '',
  });

  const handleSubmit = () => {
    const newId = uuidv4();
    const updatedContact = { id: newId, ...newContact };
    console.log("Logged", updatedContact);

    onSaveContact(updatedContact);

    setNewContact({
      name: '',
      email: '',
      account: '',
      location: '',
      orders: '',
      phone: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewContact({
      ...newContact,
      [name]: value,
    });
    
  };

  return (
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
        <button type="button" onClick={handleSubmit}>
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
