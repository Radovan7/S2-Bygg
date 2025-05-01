import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Endast POST-metod stöds' });
  }
  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    console.error('Saknade data i förfrågan:', req.body);
    return res.status(400).json({ error: 'Alla fält krävs' });
  }

  try {
    console.log('Mottagna data:', { user_name, user_email, subject, message });

    const adminResponse = await resend.emails.send({
      from: 'noreply@resend.com', 
      to: 's2byggab@outlook.com', 
      subject: `Nytt meddelande från hemsidan: ${subject}`,
      html: `
        <p><strong>Namn:</strong> ${user_name}</p>
        <p><strong>E-post:</strong> ${user_email}</p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <p><strong>Meddelande:</strong><br/>${message}</p>
      `,
    });

    console.log('E-post skickad till administratören:', adminResponse);

    const userResponse = await resend.emails.send({
      from: 'noreply@resend.com', 
      to: user_email,
      subject: 'Tack för ditt meddelande!',
      html: `
        <p>Hej ${user_name},</p>
        <p>Tack för att du kontaktade oss! Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt, vanligtvis inom 24 timmar.</p>
        <p>Vänliga hälsningar,<br/>S2 Bygg</p>
      `,
    });

    console.log('Automatiskt svar skickat till användaren:', userResponse);

    return res.status(200).json({ message: 'E-post skickades' });
  } catch (error) {
    console.error('Fel vid skickandet av e-post:', error.message, error.stack);
    return res.status(500).json({ error: 'Fel vid skickandet av e-post' });
  }
}