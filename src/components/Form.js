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

    try {
      const formData = {
        user_name: e.target.user_name.value,
        user_email: e.target.user_email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      console.log("Skickar formulärdata:", formData);

      const apiUrl = process.env.NODE_ENV === 'production' 
        ? 'https://s2bygg.com/api/send-email' 
        : '/api/send-email';

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Svarstatus:", response.status);

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
        console.log("Svarsinnehåll:", data);
      } else {
        const text = await response.text();
        console.log("Svarstext:", text);
        throw new Error("Servern returnerade inte ett JSON-svar");
      }

      if (response.ok) {
        console.log("E-post skickades framgångsrikt!");
        setStatus({
          message: "Ditt meddelande har skickats framgångsrikt!",
          success: true,
          show: true,
        });
        e.target.reset();
      } else {
        throw new Error(data.error || "Något gick fel");
      }
    } catch (error) {
      console.error("Fel vid skickandet av e-post:", error);
      setStatus({
        message: `Meddelandet kunde inte skickas: ${error.message || "Okänt problem"}`,
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
        <label htmlFor="user_name">Namn</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Ditt namn..."
          required
        />

        <label htmlFor="user_email">E-post</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="Din e-postadress..."
          required
        />

        <label htmlFor="subject">Ämne</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Ämne..."
          required
        />

        <label htmlFor="message">Meddelande</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Skriv ditt meddelande här..."
          required
        />

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Skickar..." : "Skicka"}
        </button>

        {status.show && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: status.success
                ? "rgba(0, 255, 0, 0.1)"
                : "rgba(255, 0, 0, 0.1)",
              color: status.success ? "#155724" : "#721c24",
              border: `1px solid ${
                status.success ? "#c3e6cb" : "#f5c6cb"
              }`,
              textAlign: "center",
            }}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;