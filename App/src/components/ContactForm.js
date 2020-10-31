import React, { useState } from "react";
import submit from "../images/submit.png";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="footer-contact"
          label="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        ></input>

        <input
          label="email"
          type="email"
          placeholder="Email"
          value={email}
          className="footer-contact"
          onChange={e => setEmail(e.target.value)}
          required
        ></input>

        <textarea
          className="footer-contact-message"
          type="text"
          label="message"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <input type="image" src={submit} value="Submit" alt="submit" />
      </form>
    </>
  );
};

export default ContactForm;
