# Notification_Service

# npm init

# npm i nodemon

# npm i mongoose

# folder confgi => db.config => for db name and url dynamically &&& serverConfig => For the Port number

# npm i express

# npm i body-parser

# with this express make app.listen to port in the server.js file

# Create model foledr => tickect Notification file

# Controllers => ticketnotificationController

# routes => tickect Notification Routes => for the API

# check the API in POSTMAN

# npm i nodemailer

# create notifier => emailService.js

//Create a transport object
/_
host: gmail,
auth:{
username:
password:
},
port: 465
_/

// transportObj.sendMail(emailData)

/_ emailData
{
from:'',
to:[],
subject:'',
text:''
}
_/

# compltete the logi of emailService => go to gmail and in manage=>security=> turn on two step varification on => turn on app password and then copy password from there and paste it in emailService.js and enter mailId also.

# create test.js =>

# now in POSTMAN send create notification => we should get the email to the TO address
