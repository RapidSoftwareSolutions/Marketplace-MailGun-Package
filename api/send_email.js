const _ = require('../lib/functions');
const mailgun = require('mailgun-js');
const apiArgs = ['html', 'o:tag', 'o:campaign', 'o:dkim', 'o:deliverytime', 'o:testmode', 'o:tracking', 'o:tracking-clicks', 'o:tracking-opens', 'h:X-My-Header', 'v:my-var'];

module.exports = (req, res) => {

    /* Get user parameters and prepare it */

    let attachment,
        r = { callback: "", contextWrites: {} };

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
        to = "to",
        'o:require-tls': oRequireTls,
        'o:skip-verification': oSkipVerification 
    } 
        = req.body.args;

    if(!apiKey || !mFrom || !mTo) {
        _.echoBadEnd(r, to, res);
        return;
    }

    /*
    Attachments can be sent using either the attachment or inline parameters. 
    inline parameter can be use to send an attachment with inline disposition. 
    It can be used to send inline images. 
    Both types are supported with same mechanisms as described, 
    we will just use attachment parameter in the documentation below but same stands for inline.
    */
    if(inline && _.checkUrl(inline)) inline = request(inline);

     /* MailGun SDK Initialization */
    let mail = mailgun({apiKey: apiKey, domain: domain});

    let data = {
        from: mFrom,
        to: mTo,
        subject: subject,
        text: text,
        'o:require-tls': oRequireTls || "False",
        'o:skip-verification': oSkipVerification || "False",
        //attachment: inline || new mailgun.Attachment({data: file, filename: filename})
    };

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