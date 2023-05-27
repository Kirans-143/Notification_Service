const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "kiranwork007@gmail.com",
    pass: "sshzheskvimqxdcy",
  },
  secure: true,
});
