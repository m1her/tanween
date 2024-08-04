import nodemailer from "nodemailer";

export async function handler({ req, res }: any) {
  if (req.method === "POST") {
    const { name, phoneNumber, service, msg } = req.body;

    if (!name || !phoneNumber || !service || !msg) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Create a Nodemailer transporter using SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "maher.ple@gmail.com",
          pass: "mr.maher2020",
        },
      });

      // Send email
      await transporter.sendMail({
        from: '"Your Website" <maher.ple@gmail.com>',
        to: "zeromj12@gmail.com", // Change to the recipient email
        subject: "Contact Form Submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${phoneNumber}</p>
               <p><strong>Message:</strong> ${service}</p>
               <p><strong>Message:</strong> ${msg}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
