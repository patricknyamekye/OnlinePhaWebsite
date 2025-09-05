const nodemailer = require('nodemailer');

const sendEmail = async (email, name, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        ignoreTLS: false,
        secure: false,
        auth: {
            user: "aidoomusah18ab0614@gmail.com",
            pass: "vpif nddd rnbv kmvw",
        },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "aidoomusah18ab0614@gmail.com", 
      subject: subject,
      text: `Hello WellCare,\n\n${message}\n\nBest regards,\n${name}`,     };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

module.exports = sendEmail;