// api/send-email.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Endast POST-metod stöds.' });
  }

  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: 'Alla fält krävs.' });
  }

  try {
    // Skicka till företaget
    const sendToCompany = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "S2 Bygg AB <kontakt@s2bygg.se>",
        to: "s2byggab@outlook.com",
        subject: subject,
        html: `<p><strong>Namn:</strong> ${user_name}</p>
               <p><strong>Email:</strong> ${user_email}</p>
               <p><strong>Meddelande:</strong><br/>${message}</p>`,
      }),
    });

    if (!sendToCompany.ok) {
      const errorData = await sendToCompany.json();
      throw new Error(errorData.error.message || "Fel vid skickandet till företaget.");
    }

    // Skicka autorespons till kunden
    const autoReply = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "S2 Bygg AB <kontakt@s2bygg.se>",
        to: user_email,
        subject: "Tack för att du kontaktade oss!",
        html: `<p>Hej ${user_name},</p>
               <p>Tack för att du kontaktade S2 Bygg AB. Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt.</p>
               <p>Vänliga hälsningar,<br/>S2 Bygg AB</p>`,
      }),
    });

    if (!autoReply.ok) {
      const errorData = await autoReply.json();
      throw new Error(errorData.error.message || "Fel vid skickandet av autosvar.");
    }

    return res.status(200).json({ message: "E-post skickades." });

  } catch (error) {
    console.error('Fel i API:', error);
    return res.status(500).json({ error: error.message || 'Fel vid skickandet.' });
  }
}
