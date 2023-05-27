const EmailTransporter = require("./emailService");
const emailObj = {
  from: "kiranwork007@gmail.com",
  to: "kiran.shet77@gmail.com",
  subject: "Test email from CRM",
  text: "Hello! Welcome to CRM",
};
EmailTransporter.sendMail(emailObj, async function (err, info) {
  if (err) {
    console.log(err.message);
  } else {
    //Mark the status as SENT
    console.log(info);
  }
});
