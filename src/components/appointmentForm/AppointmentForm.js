import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Appointment Title"
        required
      />
      <input
        name="date"
        type="date"
        min={getTodayString}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Select a date"
        required
      />
      <input
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Select a time"
        required
      />
      <ContactPicker contacts={contacts} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
