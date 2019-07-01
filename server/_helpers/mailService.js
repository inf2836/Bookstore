const nodemailer = require('nodemailer');

class MailService{

  sendMailToLender(book_name , email , returnDate ){
    console.log('Email sending is starting ...');
    const output ='<h3>Info zu Ihrer Ausleihe</h3>'+
    '<strong>Buch Name: '+book_name+'</strong> <strong>Rückgabe Datum: '+returnDate+'</strong>'

    // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
     // true for 465, false for other ports
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'kevinkontcheu@gmail.com', // generated ethereal user
        pass: 'emmanuelkontcheu2907'  // generated ethereal password
    },
    tls:{
    rejectUnauthorized:true
    }
  });

  // setup email data with unicode symbols
  var mailOptions = {
       // sender address
      from: '"Ausleihe notifier" <kevinkontcheu@gmail.com>',
      to: email,
      // Subject line// list of receivers
      subject: 'Ausleihe und Rückgabe',
      // plain text body
      text: 'Hello world?',
       // html body
      html: output
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log("Oops Something went wrong by senduíng the email....");
      return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
    });

  }
}
module.exports = MailService;
