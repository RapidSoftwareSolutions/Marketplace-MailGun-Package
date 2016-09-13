module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'MailGun',
        "tagline": "MailGub API Wrapper",
        "description": "Use the MailGun API to access the product's features, such as sending E-Mails, webhooks, Email Validation etc.",
        'image': 'https://avatars2.githubusercontent.com/u/447686?v=3&s=200',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-mailgun-package',
        'blocks': [{
            "name":"sendEmail",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailGun.",
                },
                {
                    name: "domain",
                    type: "String",
                    info: "Mailgun account contain email domain.",
                },
                {
                    name: "mFrom",
                    type: "String",
                    info: "Email address for From header."
                },
                {
                    name: "mTo",
                    type: "String",
                    info: "Email address of the recipient(s). ('Bob <bob@host.com>'). You can use commas to separate multiple recipients."
                },
                {
                    name: "cc",
                    type: "String",
                    info: "Same as 'To' but for Cc."
                },
                {
                    name: "bcc",
                    type: "String",
                    info: "Same as 'To' but for Bcc."
                },
                {
                    name: "subject",
                    type: "String",
                    info: "Message subject."
                },
                {
                    name: "text",
                    type: "String",
                    info: "Body of the message. (text version)."
                },
                {
                    name: "html",
                    type: "String",
                    info: "Body of the message. (HTML version)."
                },
                {
                    name: "attachment",
                    type: "String",
                    info: "File attachment."
                },
                {
                    name: "inline",
                    type: "String",
                    info: "Attachment with inline disposition (stream of the data)."
                },
                {
                    name: "o:tag",
                    type: "String",
                    info: "Tag string."
                },
                {
                    name: "o:campaign",
                    type: "String",
                    info: "Id of the campaign the message belongs to. See um-campaign-analytics for details."
                },
                {
                    name: "o:dkim",
                    type: "String",
                    info: "Enables/disables DKIM signatures on per-message basis. Pass yes or no."
                },
                {
                    name: "o:deliverytime",
                    type: "String",
                    info: "Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future."
                },
                {
                    name: "o:testmode",
                    type: "String",
                    info: "Enables sending in test mode. Pass yes if needed. See Sending in Test Mode."
                },
                {
                    name: "o:tracking",
                    type: "String",
                    info: "Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no."
                },
                {
                    name: "o:tracking-clicks",
                    type: "String",
                    info: "Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly."
                },
                {
                    name: "o:tracking-opens",
                    type: "String",
                    info: "Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no."
                },
                {
                    name: "o:require-tls",
                    type: "String",
                    info: "This requires the message only be sent over a TLS connection. (True or False)"
                },
                {
                    name: "o:skip-verification",
                    type: "String",
                    info: "If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery."
                },
                {
                    name: "h:X-My-Header",
                    type: "String",
                    info: "h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case)."
                },
                {
                    name: "v:my-var",
                    type: "String",
                    info: "v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information."
                }
            ]
        }]
    })
};
