import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Endast POST-metod stöds' });
  }

  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: 'Alla fält krävs' });
  }

  try {
    // 1. Pošalji email ka tebi (kontakt@s2bygg.se)
    await resend.emails.send({
      from: 'kontakt@s2bygg.se',  // Verifikovan sender
      to: 's2byggab@outlook.com', // Gde primamo poruke
      subject: `Nytt meddelande från hemsidan: ${subject}`,
      html: `
        <p><strong>Namn:</strong> ${user_name}</p>
        <p><strong>E-post:</strong> ${user_email}</p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <p><strong>Meddelande:</strong><br/>${message}</p>
      `,
    });

    // 2. Pošalji automatski odgovor korisniku
    await resend.emails.send({
      from: 'kontakt@s2bygg.se', // Isto, mora biti isti sender
      to: user_email,
      subject: 'Tack för ditt meddelande!',
      html: `
        <p>Hej ${user_name},</p>
        <p>Tack för att du kontaktade oss! Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt, vanligtvis inom 24 timmar.</p>
        <p>Vänliga hälsningar,<br/>S2 Bygg</p>
      `,
    });

    return res.status(200).json({ message: 'E-post skickades' });
  } catch (error) {
    console.error('Fel i API:', error);
    return res.status(500).json({ error: 'Fel vid skickandet av e-post' });
  }
}
