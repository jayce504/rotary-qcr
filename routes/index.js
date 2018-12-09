var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Queen City Rotary' });
});


router.get('/club', function(req, res, next) {
  res.render('club', { title: 'Service' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
});

router.get('/members', function(req, res, next) {
  res.render('members', { title: 'Members' });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Members' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact_us', { title: 'Members' });
});

router.post('/send-email', function (req, res) {
     let transporter = nodeMailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
             user: 'shudson5523@gmail.com',
             pass: 'Coolness5523'
         }
     });
     let mailOptions = {
         from: req.body.name, // sender address
         to: "info@queencityrotary7680.org", // list of receivers
         subject: 'Request For More information', // Subject line
         html: '<b>'+req.body.name+'</b>'+' would like more information about Queen City Rotary. '+
          'Their information is below: <br><br>'+
              '<b>Name: </b>'+req.body.name+'<br>'+
              '<b>Address: </b>'+req.body.address+'<br>'+
              '<b>Phone Number: </b>'+req.body.phoneNumber+'<br>'+
              '<b>Email: </b>'+req.body.email+'<br>'
     };

     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
             res.render('index');
         });
      res.redirect('thanks');
     });

  router.get('/thanks', function(req, res, next) {
    res.render('thanks', { title: 'Express' });
   });

   router.get('/thanks', function(req, res, next) {
     res.render('thanks', { title: 'Members' });
   });


module.exports = router;
