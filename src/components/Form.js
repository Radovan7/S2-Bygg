// src/components/Form.jsx
import "./FormStyles.css";
import { useState } from "react";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    success: false,
    show: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", success: false, show: false });

    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      // Skicka e-post till företaget (S2 Bygg AB)
      const sendToCompany = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "S2 Bygg AB <kontakt@s2bygg.se>",
          to: "s2byggab@outlook.com",
          subject: formData.subject,
          html: `<p><strong>Namn:</strong> ${formData.user_name}</p>
                 <p><strong>Email:</strong> ${formData.user_email}</p>
                 <p><strong>Meddelande:</strong><br/>${formData.message}</p>`
        })
      });

      if (!sendToCompany.ok) {
        const errorData = await sendToCompany.json();
        throw new Error(errorData.error.message || "Fel vid skickandet till företaget");
      }

      // Skicka automatiskt svar till kunden
      const autoReply = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "S2 Bygg AB <kontakt@s2bygg.se>",
          to: formData.user_email,
          subject: "Tack för att du kontaktade oss!",
          html: `<p>Hej ${formData.user_name},</p>
                 <p>Tack för att du kontaktade S2 Bygg AB. Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt.</p>
                 <p>Vänliga hälsningar,<br/>S2 Bygg AB</p>`
        })
      });

      if (!autoReply.ok) {
        const errorData = await autoReply.json();
        throw new Error(errorData.error.message || "Fel vid skickandet av automatiskt svar");
      }

      setStatus({
        message: "Ditt meddelande har skickats!",
        success: true,
        show: true,
      });
      e.target.reset();
    } catch (error) {
      console.error("Fel vid skickandet av e-post:", error);
      setStatus({
        message: `Det gick inte att skicka meddelandet: ${error.message || "Okänt fel"}`,
        success: false,
        show: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input type="text" id="name" name="user_name" placeholder="Ditt namn..." required />

        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="user_email" placeholder="Din e-postadress..." required />

        <label htmlFor="subject">Ämne</label>
        <input type="text" id="subject" name="subject" placeholder="Ämne..." required />

        <label htmlFor="message">Meddelande</label>
        <textarea id="message" name="message" rows="6" placeholder="Skriv ditt meddelande här..." required />

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Skickar..." : "Skicka"}
        </button>

        {status.show && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: status.success ? "rgba(0, 255, 0, 0.1)" : "rgba(255, 0, 0, 0.1)",
              color: status.success ? "#155724" : "#721c24",
              border: `1px solid ${status.success ? "#c3e6cb" : "#f5c6cb"}`,
              textAlign: "center",
            }}
          >
            {status.message}
          </div>
        )}
      </form>

      {/* Extra info under formuläret */}
      <div style={{ marginTop: "2rem", textAlign: "center", fontStyle: "italic", color: "#555" }}>
        Vi svarar vanligtvis inom 24 timmar.
      </div>
    </div>
  );
};

export default Form;
