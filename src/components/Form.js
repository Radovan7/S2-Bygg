import "./FormStyles.css"
import { useState } from "react"

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
      const formData = {
        user_name: e.target.user_name.value,
        user_email: e.target.user_email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      }

      console.log("Slanje podataka sa forme:", formData)

      // Pobrinite se da pozovete ispravan API
      const response = await fetch('https://tvoj-backend-url.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log("Status odgovora:", response.status)
      
      let data
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json()
        console.log("Podaci odgovora:", data)
      } else {
        const text = await response.text()
        console.log("Tekst odgovora:", text)
        throw new Error("Server nije vratio JSON odgovor")
      }

      if (response.ok) {
        console.log("Email uspešno poslat!")
        setStatus({
          message: "Tvoje poruka je uspešno poslata!",
          success: true,
          show: true,
        })
        e.target.reset()
      } else {
        throw new Error(data.error || "Nešto nije u redu")
      }
    } catch (error) {
      console.error("Greška prilikom slanja emaila:", error)
      setStatus({
        message: `Poruka nije mogla biti poslata: ${error.message || "Nepoznati problem"}`,
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
        <label htmlFor="user_name">Ime</label>
        <input type="text" id="user_name" name="user_name" placeholder="Tvoje ime..." required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" placeholder="Tvoj email..." required />

        <label htmlFor="subject">Tema</label>
        <input type="text" id="subject" name="subject" placeholder="Tema..." required />

        <label htmlFor="message">Poruka</label>
        <textarea id="message" name="message" rows="6" placeholder="Napiši svoju poruku ovde..." required />

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Šaljem..." : "Pošaljite"}
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
