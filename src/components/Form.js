// src/components/Form.jsx
import "./FormStyles.css"
import { useState, useRef } from "react"

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    message: "",
    success: false,
    show: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: "", success: false, show: false })

    try {
      // Prikupi podatke iz forme
      const formData = {
        user_name: e.target.user_name.value,
        user_email: e.target.user_email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      }

      console.log("Sending form data:", formData)

      // Pozovi API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      
      // Pokušaj da parsiraš response kao JSON
      let data
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json()
        console.log("Response data:", data)
      } else {
        const text = await response.text()
        console.log("Response text:", text)
        throw new Error("Server nije vratio JSON odgovor")
      }

      if (response.ok) {
        console.log("Email uspešno poslat!")
        setStatus({
          message: "Ditt meddelande har skickats!",
          success: true,
          show: true,
        })
        e.target.reset()
      } else {
        throw new Error(data.error || "Något gick fel")
      }
    } catch (error) {
      console.error("Greška pri slanju emaila:", error)
      setStatus({
        message: `Det gick inte att skicka meddelandet: ${error.message || "Okänt fel"}`,
        success: false,
        show: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input type="text" id="name" name="user_name" placeholder="Ditt namn..." required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" placeholder="Din email..." required />

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
    </div>
  )
}

export default Form