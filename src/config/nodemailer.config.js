const nodemailer = require('nodemailer');

module.exports.nodeMailer = function (toEmail, subject, msg) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'uncorreo@gmail.com',
      pass: 'unaclave'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Aquí en Sistemas"',
    to: toEmail,
    subject: subject, 
    text: 'Hola', 
    html: msg 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
}
