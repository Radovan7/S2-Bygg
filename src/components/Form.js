import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Namn</label>
        <input type="text" id="name" placeholder="Ditt namn..." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Din email..." />

        <label htmlFor="subject">Ämne</label>
        <input type="text" id="subject" placeholder="Ämne..." />

        <label htmlFor="message">Meddelande</label>
        <textarea id="message" rows="6" placeholder="Skriv ditt meddelande här..." />

        <button className="btn">Skicka</button>
      </form>
    </div>
  );
};

export default Form;
