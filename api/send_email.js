const       _ = require('../lib/functions');
const mailgun = require('mailgun-js');
const request = require('request');
const fs      = require('fs');
const date    = require('node-datetime');

const apiArgs = ['html', 'cc', 'bcc', 'o:tag', 'o:campaign', 'o:dkim', 'o:deliverytime', 'o:testmode', 'o:tracking', 'o:tracking-clicks', 'o:tracking-opens', 'h:X-My-Header', 'v:my-var'];

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
        _.echoBadEnd(r, to, res, 'apiKey, mFrom, mTo');
        return;
    }

    if( (inline && _.checkUrl(inline)) || attachment ) attachment = request(inline || attachment);

     /* MailGun SDK Initialization */
    let mail = mailgun({ apiKey, domain });

    let data = {
        from: mFrom,
        // to: mTo,
        subject: subject,
        text: text,
        'o:require-tls': oRequireTls || false,
        'o:skip-verification': oSkipVerification || false
    };
    if (typeof mTo == 'object') {
        data.to = mTo.join();
    }
    else {
        data.to = mTo;
    }

    if(attachment) data.attachment = attachment; 
    
    Object.keys(req.body.args).forEach((key) => {
        if( apiArgs.indexOf(key) !== -1 && req.body.args[key] )
        {
            if (key == 'o:deliverytime') {
                let dateTime = date.create(req.body.args[key]);
                data[key] = dateTime.format('w, d n Y H:M:S') + ' GMT';
            }
            else if ((key == 'cc' || key == 'bcc') && typeof req.body.args[key] == 'object') {
                data[key] = req.body.args[key].join();
            }
            else {
                data[key] = req.body.args[key];
            }
        }
    });

    if(data['v:my-var'] && typeof data['v:my-var'] == 'string') {
        try {
            JSON.parse(data['v:my-var']);
        } catch(e) {
            r.callback = 'error';
            r.contextWrites[to] = {
                status_code: 'JSON_VALIDATION',
                status_msg: 'Syntax error. Incorrect input JSON. Please, check fields with JSON input.'
            };

            res.status(200).send(r); 
            return;
        }
    } 

    mail.messages().send(data, (err, body) => {
        if(err) {
            r.contextWrites[to] = err;
            r.callback = 'error';
        }
        else {
            r.contextWrites[to] = body;
            r.callback = 'success';
        }

        res.status(200).send(r);      
    });
};