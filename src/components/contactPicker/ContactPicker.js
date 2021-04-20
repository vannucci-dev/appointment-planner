import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option defaultValue value={""} key={-2}>
        No contact selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
