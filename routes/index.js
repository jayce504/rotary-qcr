var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Queen City Rotary' });
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

module.exports = router;
