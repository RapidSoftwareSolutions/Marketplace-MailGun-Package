"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

/** SET UP **/
const PORT = process.env.PORT || 8080;
global.PACKAGE_NAME = "MailGun";

if (!fs.existsSync('/tmp/marketplace-mailgun-package')) {
    fs.mkdirSync('/tmp/marketplace-mailgun-package');
}

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

app.get(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

app.post(`/api/${PACKAGE_NAME}/sendEmail`, require('./api/send_email.js'));
app.post(`/api/${PACKAGE_NAME}/sendEmailMIME`, require('./api/send_email_mime.js'));
app.post(`/api/${PACKAGE_NAME}/getMessages`, require('./api/get_messages.js'));

/** START LISTENING **/
app.listen(PORT);

module.exports = app;
