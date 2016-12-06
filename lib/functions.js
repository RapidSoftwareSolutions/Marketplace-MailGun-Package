module.exports.echoBadEnd = (r, to, res, req) => {
    r.contextWrites[to] = {
    	status_code: "REQUIRED_FIELDS",
        status_msg: 'Please, check and fill in required fields',
        fields: req.split(', ')
    };
    r.callback = 'error';

    res.status(200).send(r);
};

module.exports.checkUrl = (str) => /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(str);