const _        = require('../lib/functions');
const _request = require('../request');
const request  = require('request');
const async    = require('async');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */

    let r = { callback: "", contextWrites: {} };

    let { 
        apiKey,
        domain,
        to = "to",
        rawMime = "False"
    } 
        = req.body.args;

    if(!apiKey || !domain) {
        _.echoBadEnd(r, to, res);
        return;
    }

    /*Get mailgun logs with stored filter*/

    _request(apiKey, `https://api.mailgun.net/v3/${domain}/events?event=stored`, (err, response, storedEvents) => {
        console.log(storedEvents);
        if(err || response.statusCode !== 200) {
            r.contextWrites[to] = (err) ? JSON.stringify(err) : '(' + response.statusCode + ') ' + storedEvents;
            r.callback = 'error';

            res.status(200).send(r);
            return;
        }

        let messageUrls  = [];

        if(storedEvents['items'].length < 1) {
            r.contextWrites[to] = {};
            r.callback = 'success';

            res.status(200).send(r);
            return;
        }

        for (let i = 0; i < storedEvents['items'].length; i++) {
            
            /* 
            Create array of functions, wich returns http request -> callback response body 
            {"Accept": "message/rfc2822"} header -> MIME raw    
            */
            
            messageUrls[messageUrls.length] = (callback) => {
                request.get(
                    {
                        url:     storedEvents['items'][i]['storage']['url'],
                        headers: {"Accept": (rawMime == 'True') ? "message/rfc2822" : "*"}
                    }, 

                    (err, response, body) => {
                        if(err || response.statusCode !== 200) callback(null, i);
                        callback(null, body);
                    }

                ).auth('api', apiKey);
            }
        }

        async.parallel(messageUrls, function(err, results) {
            r.contextWrites[to] = [];
            r.callback = 'success';

            for (let i = 0; i < results.length; i++) {

                /* Bug in rpt there */
                
                r.contextWrites[to].push(JSON.parse(results[i]));
            }

            res.status(200).send(r);
        });

    });
};