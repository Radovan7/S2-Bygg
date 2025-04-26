// api/send-email.js
const { Resend } = require("resend")

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY)

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { user_name, user_email, subject, message } = req.body

    if (!user_name || !user_email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" })
    }

    // Šalji email klijentu (auto-reply)
    await resend.emails.send({
      from: "S2 Bygg <onboarding@resend.dev>", // Koristi Resend default domen dok ne verifikuješ svoj
      to: [user_email],
      subject: "Tack för ditt meddelande",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Tack för ditt meddelande!</h2>
          <p>Hej ${user_name},</p>
          <p>Vi har mottagit ditt meddelande och återkommer till dig så snart som möjligt.</p>
          <p>Med vänlig hälsning,<br>S2 Bygg AB</p>
        </div>
      `,
    })

    // Šalji email kompaniji
    const data = await resend.emails.send({
      from: "S2 Bygg Kontaktformulär <onboarding@resend.dev>", // Koristi Resend default domen dok ne verifikuješ svoj
      to: ["s2byggab@outlook.com"], // Promeni ovo na svoju email adresu
      reply_to: user_email,
      subject: `Ny förfrågan: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>S2 Bygg AB - Ny förfrågan</title>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height:1.5; color:#333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <!-- Header with logo -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; color: #333;">S2 Bygg AB</h1>
            <p style="margin: 5px 0 0; color: #666;">Ny förfrågan via kontaktformulär</p>
          </div>
          
          <!-- Main content -->
          <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin-top: 0;">Hej S2 Bygg AB,</p>
            <p>Ni har fått en ny förfrågan via ert kontaktformulär:</p>
            
            <table cellpadding="8" style="border-collapse: collapse; width: 100%; margin: 20px 0;">
              <tr>
                <td style="border-bottom: 1px solid #eee; width: 30%;"><strong>Ämne:</strong></td>
                <td style="border-bottom: 1px solid #eee;">${subject}</td>
              </tr>
              <tr>
                <td style="border-bottom: 1px solid #eee; background-color: #f2f2f2;"><strong>Namn:</strong></td>
                <td style="border-bottom: 1px solid #eee; background-color: #f2f2f2;">${user_name}</td>
              </tr>
              <tr>
                <td style="border-bottom: 1px solid #eee;"><strong>E-post:</strong></td>
                <td style="border-bottom: 1px solid #eee;">${user_email}</td>
              </tr>
              <tr>
                <td style="background-color: #f2f2f2; vertical-align: top;"><strong>Meddelande:</strong></td>
                <td style="background-color: #f2f2f2; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            
            <p>Vänligen svara kunden så snart som möjligt.</p>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; font-size: 14px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin: 0 0 10px;">Med vänlig hälsning,<br>S2 Bygg AB</p>
            <p style="margin: 0;">
              <a href="https://s2-bygg.vercel.app/" style="color: #4d4dff; text-decoration: none;">s2-bygg.vercel.app</a>
            </p>
          </div>
        </body>
        </html>
      `,
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return res.status(500).json({ error: "Failed to send email: " + error.message })
  }
}