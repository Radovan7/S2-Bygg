import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
      from: 'S2 Bygg <send@s2bygg.com>', 
      to: 's2byggab@outlook.com', 
      subject: `Nytt meddelande från hemsidan: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Nytt meddelande från hemsidan</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Namn:</strong> ${user_name}</p>
            <p><strong>E-post:</strong> ${user_email}</p>
            <p><strong>Ämne:</strong> ${subject}</p>
            <p><strong>Meddelande:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eaeaea; padding-top: 10px;">
            <p>Detta meddelande skickades via kontaktformuläret på s2bygg.com</p>
          </div>
        </div>
      `,
    });

    const userResponse = await resend.emails.send({
      from: 'S2 Bygg <send@s2bygg.com>', 
      to: user_email,
      subject: 'Tack för ditt meddelande!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Tack för ditt meddelande!</h2>
          
          <div style="margin: 20px 0;">
            <p>Hej ${user_name},</p>
            <p>Tack för att du kontaktade oss! Vi har mottagit ditt meddelande och kommer att återkomma till dig så snart som möjligt, vanligtvis inom 24 timmar.</p>
          </div>
          
          <div style="margin-top: 20px;">
            <p>Vänliga hälsningar,<br/>S2 Bygg</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eaeaea; padding-top: 10px;">
            <p>Detta är ett automatiskt svar. Vänligen svara inte på detta e-postmeddelande.</p>
          </div>
        </div>
      `,
    });

    console.log('E-post skickad till administratören:', adminResponse);
    console.log('Automatiskt svar skickat till användaren:', userResponse);

    return res.status(200).json({ message: 'E-post skickades' });
  } catch (error) {
    console.error('Fel vid skickandet av e-post:', error.message, error.stack);
    return res.status(500).json({ error: 'Fel vid skickandet av e-post' });
  }
}