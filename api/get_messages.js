const _ = require('../lib/functions');
const request = require('request');
const async = require('async');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */

    let r = { callback: "", contextWrites: {} };

    let { 
        apiKey,
        domain,
        to = "to"
    } 
        = req.body.args;

    if(!apiKey || !domain) {
        _.echoBadEnd(r, to, res);
        return;
    }

    request.get(`https://api.mailgun.net/v3/${domain}/events?event=stored`, (err, response, body) => {
        if(err || response.statusCode !== 200) {
            r.contextWrites[to] = (err) ? JSON.stringify(err) : '(' + response.statusCode + ') ' + body;
            r.callback = 'error';

            res.status(200).send(r);
            return;
        }

        let messageUrls  = [],
            storedEvents = JSON.parse(body);

        for (let i = 0; i < storedEvents['items'].length; i++) {
            messageUrls[messageUrls.length] = (callback) => {

                request.get(

                    {
                        url:     storedEvents['items'][i]['storage']['url'],
                        headers: {"Accept": "message/rfc2822"}
                    }, 

                    (err, response, body) => {
                        if(err || response.statusCode !== 200) callback(null, i);
                        callback(null, body);
                        //console.log(body);
                    }
                ).auth('api', apiKey);
            }
        }

        async.parallel(messageUrls, function(err, results) {
            r.contextWrites[to] = [];
            r.callback = 'success';

            for (let i = 0; i < results.length; i++) {
                r.contextWrites[to].push(JSON.parse(results[i]));
            }

            console.log(r);

            res.status(200).send(r);
        });

    }).auth('api', apiKey);
};