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
