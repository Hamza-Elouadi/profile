import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // ex: yourmail@gmail.com
      pass: process.env.EMAIL_PASS, // ex: app password, not your real pass
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${firstName} ${lastName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
