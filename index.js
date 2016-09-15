"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    multer          = require('multer'),
    fs              = require('fs');

/** SET UP **/
const PORT = process.env.PORT || 8080;
global.PACKAGE_NAME = "marketplace-mailgun-package";

if (!fs.existsSync('/tmp/marketplace-mailgun-package')) {
    fs.mkdirSync('/tmp/marketplace-mailgun-package');
}

/* Configure server */
/*fs.appendFile('/etc/default/rcS', '\nTMPTIME=1', (err) => {
 	if (err) return console.log(err);
});*/

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
    	cb(null, `/tmp/${PACKAGE_NAME}`);
  	},

  	filename: function (req, file, cb) {
  		console.log(file.fieldname);
    	cb(null, file.originalname.replace(/[^a-zA-Z ]/g, "") + '-' + Date.now());
  	}
});

let attach = multer({storage: storage});

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

app.get(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

app.post(`/api/${PACKAGE_NAME}/sendEmail`, attach.single('attachment'), require('./api/send_email.js'));
app.post(`/api/${PACKAGE_NAME}/sendEmailMIME`, require('./api/send_email_mime.js'));
app.post(`/api/${PACKAGE_NAME}/getMessages`, require('./api/get_messages.js'));

/** START LISTENING **/
app.listen(PORT);

module.exports = app;
