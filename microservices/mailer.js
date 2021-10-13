var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

async function mailer(mail_text){
	var transporter = nodemailer.createTransport(smtpTransport({
	  service: 'gmail',
	  host: 'smtp.gmail.com',
	  auth: {
	    user: 'dev.lopaper@gmail.com',
	    pass: 'XTy34#lM1!'
	  }
	}));

	var mailOptions = {
	  from: 'dev.lopaper@gmail.com',
	  to: 'dev.lopaper@gmail.com',
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