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
        _.echoBadEnd(r, to, res);
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

    composed.build((err, message) => {
        if(err) {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
            res.status(200).send(r);

            return;
        }

        dataToSend.to = mTo;
        dataToSend.message = message.toString('utf-8');


        console.log(message.toString('utf-8'));
        
        mail.messages().sendMime(dataToSend, (err, body) => {
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
    });
};