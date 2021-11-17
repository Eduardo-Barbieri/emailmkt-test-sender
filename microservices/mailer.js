var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

async function mailer(mail_text){
	var transporter = nodemailer.createTransport(smtpTransport({
	  service: 'gmail',
	  host: 'smtp.gmail.com',
	  auth: {
	    user: '', //add origin email
	    pass: '' //add password
	  }
	}));

	var mailOptions = {
	  from: '' //add origin email,
	  to: ['' ],//add destination.
	  subject: 'Sending Email using Node.js[nodemailer]',
	  text: "email de teste",
	  html: mail_text
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});  
};

module.exports = mailer; 