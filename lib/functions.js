module.exports.echoBadEnd = (r, to, res) => {
    r.contextWrites[to] = 'Error: Fill in required fields to use the MailGub API.';
    r.callback = 'error';

    res.status(200).send(r);
}

module.exports.checkUrl = (str) => /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(str);