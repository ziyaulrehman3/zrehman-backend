import nodemailer from "nodemailer";

const Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "system.zrehmaninfotech@gmail.com",
    pass: process.env.APP_PASSWORD_GMAIL,
  },
});

export const ContactMailSender = async ({ name, email, mobile, msg }) => {
  return Transporter.sendMail({
    from: '"Z-Rehman Infotech" <system.zrehmaninfotech@gmail.com>',
    to: "zrehmaninfotech@yahoo.com",
    subject: "Contact Form Query",
    text:
      `Name:` +
      name +
      `, Email:` +
      email +
      ",Mobile:" +
      mobile +
      ",Message:" +
      msg,
    html:
      `<body style="margin:0;padding:0; background-color:#f0f8ff;"><table align="center" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif; background-color:#f0f8ff; padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border:1px solid #cce5ff; border-radius:8px;">
            <tr>
              <td style="background-color:#3399ff; color:#ffffff; padding:20px; text-align:center; border-top-left-radius:8px; border-top-right-radius:8px;">
                <h2 style="margin:0;">📩 New Query Submitted</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:20px; color:#333;">
                <p><strong style="color:#004080;">Name:</strong> ` +
      name +
      `</p>
                <p><strong style="color:#004080;">Email:</strong> ` +
      email +
      `</p>
                <p><strong style="color:#004080;">Phone:</strong> ` +
      mobile +
      `</p>
                <p><strong style="color:#004080;">Message:</strong></p>
                <div style="background-color:#e6f2ff; padding:15px; border-left:4px solid #3399ff; border-radius:4px;">
` +
      msg +
      `                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:10px; text-align:center; font-size:12px; color:#888;">
                This is an automated message. Please do not reply.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table></body>`,
  });
};
