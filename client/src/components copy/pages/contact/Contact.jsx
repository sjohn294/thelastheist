import React from "react";
import ContactCSS from './contact.module.css'
import { useState } from 'react';


function Contact() {
 
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    
    if(name === 'Name') {
     return setName(value);
    } else if(name === 'Email') {
     return setEmail(value);
    } else {
     return setMessage(value);
    }
 

};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${Name}, we will contact you shortly at ${Email}`);
    setName('');
    setEmail('');
    setMessage('');
  };


 
    return (
      <div>
        <h1>Contact Page</h1>
        <p>
          <div className={ContactCSS.container}>
            <div className={ContactCSS.header}>I'd love to hear from you. <br />
            Please fill out the form below.</div>
             <form className={ContactCSS.form} onSubmit={handleFormSubmit}>
              <input
              className={ContactCSS.Name}
                value={Name}
                name="Name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                required={true}
              />
              <input
              className={ContactCSS.Email}
                value={Email}
                name="Email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
                required={true}
              />
              <input
              className={ContactCSS.Message}
                value={Message}
                name="Message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
              />
              <button className={ContactCSS.Submit} type="submit">
                Submit
              </button>
            </form> 
          </div>

        </p>
      </div>
    );
  }

 export default Contact;