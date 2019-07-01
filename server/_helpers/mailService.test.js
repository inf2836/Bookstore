const nodemailerMock = require('nodemailer-mock');
const transport = nodemailerMock.createTransport({
   // true for 465, false for other ports
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'example@gmail.com', // generated ethereal user
      pass: 'abcd'  // generated ethereal password
  },
  tls:{
  rejectUnauthorized:true
  }
});

var email = 'test@gmail.com'

test('should', () => {
transport.sendMail(email)
.then(function(info) {
  console.log('Success!', info);
  })

  // verify a transport
transport.verify(function(err, success) {
  if (err) {
    expect(err).toEquals('nodemailer-mock failure');
  } else {
    expect(success).toEquals('nodemailer-mock success');
  }
})
});
