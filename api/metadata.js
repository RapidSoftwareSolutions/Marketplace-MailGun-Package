module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'MailGun',
        "tagline": "MailGub API Wrapper",
        "description": "Use the MailGun API to access the product's features, such as sending E-Mails, webhooks, Email Validation etc.",
        'image': 'https://avatars2.githubusercontent.com/u/447686?v=3&s=200',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-mailgun-package',
        'keywords': ["API", "analytics", "email", "emails", "marketing", "smb"],
        'accounts': {
            'domain': 'mailgun.com',
            'credentials': [
                'apiKey',
                'domain'

            ]
        },
        'blocks': [{
            "name":"sendEmail",
            "description": "Sends an email.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from MailGun.",
                    required: true
                },
                {
                    name: "domain",
                    type: "String",
                    info: "Mailgun account contain email domain.",
                    required: true
                },
                {
                    name: "mFrom",
                    type: "String",
                    info: "Email address for From header.",
                    required: true
                },
                {
                    name: "mTo",
                    type: "List",
                    info: "Email address of the recipient(s). ('Bob <bob@host.com>'). You can use commas to separate multiple recipients.",
                    required: true,
                    structure: {
                        name: "email",
                        type: "String",
                        info: "Email",
                        required: true
                    }
                },
                {
                    name: "cc",
                    type: "List",
                    info: "Same as 'To' but for Cc.",
                    required: false,
                    structure: {
                        name: "email",
                        type: "String",
                        info: "Email",
                        required: false
                    }
                },
                {
                    name: "bcc",
                    type: "List",
                    info: "Same as 'To' but for Bcc.",
                    required: false,
                    structure: {
                        name: "email",
                        type: "String",
                        info: "Email",
                        required: false
                    }
                },
                {
                    name: "subject",
                    type: "String",
                    info: "Message subject.",
                    required: false
                },
                {
                    name: "text",
                    type: "String",
                    info: "Body of the message. (text version).",
                    required: false
                },
                {
                    name: "html",
                    type: "String",
                    info: "Body of the message. (HTML version).",
                    required: false
                },
                {
                    name: "attachment",
                    type: "File",
                    info: "File attachment.",
                    required: false
                },
                {
                    name: "inline",
                    type: "String",
                    info: "Attachment with inline disposition.",
                    required: false
                },
                {
                    name: "o:tag",
                    type: "List",
                    info: "Tag string.",
                    required: false,
                    structure: {
                        "name": "tag",
                        "type": "String",
                        "info": "Tag",
                        "required": true
                    }
                },
                {
                    name: "o:campaign",
                    type: "String",
                    info: "Id of the campaign the message belongs to. See um-campaign-analytics for details.",
                    required: false
                },
                {
                    name: "o:dkim",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Enables/disables DKIM signatures on per-message basis. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:deliverytime",
                    type: "DatePicker",
                    info: "Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.",
                    required: false
                },
                {
                    name: "o:testmode",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Enables sending in test mode. Pass yes if needed. See Sending in Test Mode.",
                    required: false
                },
                {
                    name: "o:tracking",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:tracking-clicks",
                    type: "Select",
                    options: ["yes", "no", "htmlonly"],
                    info: "Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.",
                    required: false
                },
                {
                    name: "o:tracking-opens",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:require-tls",
                    type: "Boolean",
                    info: "This requires the message only be sent over a TLS connection. (True or False)",
                    required: false
                },
                {
                    name: "o:skip-verification",
                    type: "Boolean",
                    info: "If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.",
                    required: false
                },
                {
                    name: "h:X-My-Header",
                    type: "String",
                    info: "h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).",
                    required: false
                },
                {
                    name: "v:my-var",
                    type: "JSON",
                    info: "v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },  
        {
            "name":"sendEmailMIME",
            "description": "Posts a message in MIME format.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from MailGun.",
                    required: true
                },
                {
                    name: "domain",
                    type: "String",
                    info: "Mailgun account contain email domain.",
                    required: true
                },
                {
                    name: "mFrom",
                    type: "String",
                    info: "Email address for From header.",
                    required: true
                },
                {
                    name: "mTo",
                    type: "List",
                    info: "Email address of the recipient(s). ('Bob <bob@host.com>'). You can use commas to separate multiple recipients.",
                    required: true,
                    structure: {
                        "name": "email",
                        "type": "String",
                        "info": "Email",
                        "required": true
                    }
                },
                {
                    name: "subject",
                    type: "String",
                    info: "Message subject.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Body of the message. (text version).",
                    required: true
                },
                {
                    name: "html",
                    type: "String",
                    info: "Body of the message. (HTML version).",
                    required: false
                },
                {
                    name: "o:tag",
                    type: "List",
                    info: "Tag string.",
                    required: false,
                    structure: {
                        "name": "tag",
                        "type": "String",
                        "info": "Tag",
                        "required": false
                    }
                },
                {
                    name: "o:campaign",
                    type: "String",
                    info: "Id of the campaign the message belongs to. See um-campaign-analytics for details.",
                    required: false
                },
                {
                    name: "o:dkim",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Enables/disables DKIM signatures on per-message basis. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:deliverytime",
                    type: "DatePicker",
                    info: "Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.",
                    required: false
                },
                {
                    name: "o:testmode",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Enables sending in test mode. Pass yes if needed. See Sending in Test Mode.",
                    required: false
                },
                {
                    name: "o:tracking",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:tracking-clicks",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.",
                    required: false
                },
                {
                    name: "o:tracking-opens",
                    type: "Select",
                    options: ["yes", "no"],
                    info: "Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.",
                    required: false
                },
                {
                    name: "o:require-tls",
                    type: "Boolean",
                    info: "This requires the message only be sent over a TLS connection. (True or False)",
                    required: false
                },
                {
                    name: "o:skip-verification",
                    type: "Boolean",
                    info: "If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.",
                    required: false
                },
                {
                    name: "h:X-My-Header",
                    type: "String",
                    info: "h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).",
                    required: false
                },
                {
                    name: "v:my-var",
                    type: "JSON",
                    info: "v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },
        {
            "name":"getMessages",
            "description": "Returns stored messages.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from MailGun.",
                    required: true
                },
                {
                    name: "domain",
                    type: "String",
                    info: "Mailgun account contain email domain.",
                    required: true
                },
                {
                    name: "rawMime",
                    type: "Boolean",
                    info: "It will help you to get the raw MIME True OR False (def).",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }]
    })
};
