var express = require("express");
var router = express.Router();
var nodeMailer = require("nodemailer");
const { ensureAuthenticated } = require("../config/auth");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { title: "Queen City Rotary" });
});

router.get("/calendar", function(req, res, next) {
  res.render("calendar", { title: "Club Calendar" });
});

router.get("/club", function(req, res, next) {
  res.render("club", { title: "Our Club" });
});

router.get("/service", function(req, res, next) {
  res.render("service", { title: "Service" });
});

router.get("/events", function(req, res, next) {
  res.render("events", { title: "Events" });
});

router.get("/mission", function(req, res, next) {
  res.render("mission", { title: "Our Mission" });
});

router.get("/rotary_intro", function(req, res, next) {
  res.render("what_is_rotary", { title: "Go on..." });
});

router.get("/membership_process", function(req, res, next) {
  res.render("membership_process", { title: "Go on..." });
});

router.get("/members", ensureAuthenticated, (req, res) =>
  res.render("members", {
    user: req.user,
    title: ""
  })
);

router.get("/resources", function(req, res, next) {
  res.render("resources", { title: "Members" });
});

router.get("/contact", function(req, res, next) {
  res.render("contact_us", { title: "Members" });
});

router.get("/this-week", function(req, res, next) {
  res.render("this-week", { title: "Members" });
});

router.post("/send-email", function(req, res) {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "shudson5523@gmail.com",
      pass: "Coolness@5523!"
    }
  });
  let mailOptions = {
    from: req.body.name, // sender address
    to: "info@queencityrotary7680.org", // list of receivers
    subject: "Request For More information", // Subject line
    html:
      "<b>" +
      req.body.name +
      "</b>" +
      " would like more information about Queen City Rotary. " +
      "Their information is below: <br><br>" +
      "<b>Name: </b>" +
      req.body.name +
      "<br>" +
      "<b>Phone Number: </b>" +
      req.body.phoneNumber +
      "<br>" +
      "<b>Email: </b>" +
      req.body.email +
      "<br>" +
      "<b>Best way to contact them: </b>" +
      req.body.best_method
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
  res.redirect("thanks");
});

router.get("/thanks", function(req, res, next) {
  res.render("thanks", { title: "Express" });
});

router.get("/thanks", function(req, res, next) {
  res.render("thanks", { title: "thanks" });
});

router.get("/officers", function(req, res, next) {
  res.render("officers", { title: "Officers" });
});

module.exports = router;
