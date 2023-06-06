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

# check the API in POSTMAN and we should get mail

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

## now for the background job we need to install cron module

# npm i node-cron

# cron.schedule => 1.Query all the notification documents whose status is NOT_SENT 2.Loop over the query result and send out email using the transport object 3.Mark the status of the notification as sent

# whenevr we press Create Notification in postaman it will create notification and send mail to respected mail id and we can check the status of the mssage also in postaman with get notification by id in postman

# now will deploy the notification service also and then will integrate both
# now did the same thing as we didi in crm baceknd app and lets paste the db url in config-> db.config
