import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  //if no duplicate found, addContact to contacts array
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  //Checking for duplicates in contact array when new name is inserted in form
  useEffect(() => {
    const nameIsDuplicate = () => {
      const isThere = contacts.find((contact) => contact.name === name);
      if (isThere !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [name, contacts, isDuplicate]);

  return (
    <>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? "Contact already present" : ""}
        </h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};
