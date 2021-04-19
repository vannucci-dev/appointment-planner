import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Contact first and last name..."
        onChange={(e) => setName(e.target.value)}
        required
        name="name"
      />
      <input
        type="tel"
        value={phone}
        placeholder="Contact UK phone number..."
        pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"
        onChange={(e) => setPhone(e.target.value)}
        required
        name="phone"
      />
      <input
        type="email"
        value={email}
        placeholder="Contact email address..."
        onChange={(e) => setEmail(e.target.value)}
        required
        name="email"
      />
      <input type="submit" value="Add the Contact" />
    </form>
  );
};
