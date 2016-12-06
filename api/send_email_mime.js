const _ = require('../lib/functions');
const mailgun = require('mailgun-js');
const mailcomposer = require('mailcomposer');

const apiArgs = ['html', 'o:tag', 'o:campaign', 'o:dkim', 'o:deliverytime', 'o:testmode', 'o:tracking', 'o:tracking-clicks', 'o:tracking-opens', 'h:X-My-Header', 'v:my-var'];

module.exports = (req, res) => {

    /* Get user parameters and prepare it */

    let dataToSend = {},
        r = { callback: "", contextWrites: {} };

    let { 
        apiKey,
        domain,
        mFrom, 
        mTo, 
        subject,
        text, 
        html = '<p>' + text + '</p>',
        to = "to"
    } 
        = req.body.args;

    if(!apiKey || !mFrom || !mTo) {
        _.echoBadEnd(r, to, res, 'apiKey, mFrom, mTo');
        return;
    }

     /* MailGun SDK Initialization */
    let mail = mailgun({apiKey: apiKey, domain: domain});

    /* Create read stream */
    let composed = mailcomposer({
        from: mFrom,
        to: mTo,
        subject: subject,
        text: text,
        html: html
    });

    Object.keys(req.body.args).forEach((key) => {
        if( apiArgs.indexOf(key) !== -1 && req.body.args[key] )
            dataToSend[key] = req.body.args[key];
    });

    if(dataToSend['v:my-var'] && typeof data['v:my-var'] == 'string') {
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

    composed.build((err, message) => {
        if(err) {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
            res.status(200).send(r);

            return;
        }

        dataToSend.to = mTo;
        dataToSend.message = message.toString('utf-8');

        mail.messages().sendMime(dataToSend, (err, body) => {
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
    });
};