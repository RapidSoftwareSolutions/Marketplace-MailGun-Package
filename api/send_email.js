const       _ = require('../lib/functions');
const mailgun = require('mailgun-js');
const request = require('request');
const fs      = require('fs');

const apiArgs = ['html', 'o:tag', 'o:campaign', 'o:dkim', 'o:deliverytime', 'o:testmode', 'o:tracking', 'o:tracking-clicks', 'o:tracking-opens', 'h:X-My-Header', 'v:my-var'];

module.exports = (req, res) => {

    /* Get user parameters and prepare it */

    let r = { callback: "", contextWrites: {} };
    let { 
        apiKey,
        domain,
        mFrom, 
        mTo, 
        cc, 
        bcc, 
        subject,
        text, 
        inline,
        attachment,
        to = "to",
        'o:require-tls': oRequireTls,
        'o:skip-verification': oSkipVerification,
    } 
        = req.body.args || req.body;

    if(!apiKey || !mFrom || !mTo) {
        _.echoBadEnd(r, to, res);
        return;
    }

    if( (inline && _.checkUrl(inline)) || attachment ) attachment = request(inline || attachment);

     /* MailGun SDK Initialization */
    let mail = mailgun({ apiKey: apiKey, domain: domain });

    let data = {
        from: mFrom,
        to: mTo,
        subject: subject,
        text: text,
        'o:require-tls': oRequireTls || "False",
        'o:skip-verification': oSkipVerification || "False",
    };

    if(attachment) data.attachment = attachment;

    // req.body.args = req.body.args || req.body
    
    Object.keys(req.body.args).forEach((key) => {
        if( apiArgs.indexOf(key) !== -1 && req.body.args[key] )
            data[key] = req.body.args[key];
    });

    mail.messages().send(data, (err, body) => {
        if(err) {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }
        else {
            r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success';
        }

        res.status(200).send(r);      
    });
};