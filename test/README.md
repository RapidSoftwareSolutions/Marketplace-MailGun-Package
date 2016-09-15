# MailGun Package
This package allows you to sending E-Mails, get messages etc.


Use the MailGun API to access the product's features, such as sending E-Mails, webhooks, Email Validation etc.

<!--Need to add explanation on how to get API key WITH SCREENSHOTS-->

## MailGun.sendEmail
Sends an email.


| Field                 | Type     | Description  |
| ----------------------| ---------| -------------|
| `apiKey`*             |string  | The api key obtained from MailGun. |
| `domain`*             |string  | The domain obtained from MailGun. |
| `from`*               |string  | Email address. |
| `to`*                 |string  | Email address of the recipient(s). |
| `cc`                  |string  | Same as To but for Bcc |
| `subject`             |string  |Message subject|
| `text`                |string  |Body of the message. (text version)|
| `html`                |string  |Body of the message. (HTML version)|
| `attachment`          |string  |File attachment(s)|
| `inline`              |string  |Attachment with inline disposition.|
| `o:tag`               |string  |Tag string|
| `o:campaign`          |string  |Id of the campaign the message belongs to|
| `o:dkim` |string      |Enables/disables DKIM signatures on per-message basis. Pass `yes` or `no`|
| `o:deliverytime`      |string  |Desired time of delivery in `RFC 2822` date format (like 'Thu, 13 Oct 2011 18:02:00 GMT').|
| `o:testmode` |string  |Enables sending in test mode. Pass `yes` if needed. (When you do this, Mailgun will accept the message but will not send it. This is useful for testing purposes.)|
| `o:tracking` |string  |Toggles tracking on a per-message basis. Pass `yes` or `no`. (Once you start sending and receiving messages, it’s important to track what’s happening with them. MailGun try to make tracking your messages as easy as possible through Events, Stats and Campaigns.) |
| `o:tracking-clicks`   |string  |Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass `yes`, `no` or `htmlonly`.|
| `o:tracking-opens `   |string  |Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass `yes` or `no`.|
| `o:require-tls`       |string  |If set to `True` this requires the message only be sent over a TLS connection. If set to False, Mailgun will still try and upgrade the connection, but if Mailgun can not, the message will be delivered over a plaintext SMTP connection. The default is `False`.|
| `o:skip-verification` |string  |If set to `True`, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery. If set to `False`, Mailgun will verify the certificate and hostname. If either one can not be verified, a TLS connection will not be established. The default is `False`.|
| `h:X-My-Header`       |string  |h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address.|

#### Request example
```json
{
	"apiKey": "YOUR_API_KEY",
	"domain": "YOUR_DOMAIN_NAME",
	"from": "FOO@YOUR_DOMAIN_NAME",
	"to": "bar@example.com",
	"subject": "Hello",
	"text": "From with &#10084;"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to" : "{\"id\":\"<YOU@FOO@YOUR_DOMAIN_NAME>\",\"message\":\"Queued. Thank you.\"}"
		}
	}
}
```

## MailGun.sendEmailMIME
Posts a message in MIME format.

**The same field as in MailGun.sendEmail method**

#### Request example
```json
{
	"apiKey": "YOUR_API_KEY",
	"domain": "YOUR_DOMAIN_NAME",
	"from": "FOO@YOUR_DOMAIN_NAME",
	"to": "bar@example.com",
	"subject": "Hello",
	"text": "From RapidAPI with &#10084;"
}
```

#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "{"id":"<181a41e3-cf73-b708-bdb1-e3d709d22e1f@example.com>","message":"Queued. Thank you."}"
		}
	}
}
```

## MailGun.getMessages
Returns stored messages.

| Field             | Type    | Description                                                                              |
| ------------------|---------| -----------------------------------------------------------------------------------------|
| `apiKey`*         |string   | The api key obtained from MailGun.                                                       |
| `domain`*         |string   | The domain obtained from MailGun.                                                        |
| `mimeRaw`         |string   | This will help you to get the raw MIME (*). Set `True` or `False`. `False` by default.        |

#### Request example
```json
{
	"apiKey": "YOUR_API_KEY",
	"domain": "YOUR_DOMAIN_NAME",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"to": [{
			"Received": "by 10.107.56.69 with HTTP; Wed, 14 Sep 2016 04:18:40 -0700 (PDT)",
			"stripped-signature": "",
			"From": "My Dude <bar@example.com>",
			"X-Envelope-From": "<bar@example.com>>",
			"recipients": "YOU@YOU_DOMAIN",
			"X-Google-Dkim-Signature": "... metadata",
			"To": "YOU@YOU_DOMAIN",
			"message-headers": [
				["X-Mailgun-Incoming", "Yes"],
				["X-Envelope-From", "<bar@example.com>"],
				["Received", "some string"],
				["Received", "... <YOU@YOU_DOMAIN>; Wed, 14 Sep 2016 04:18:41 -0700 (PDT)"],
				["X-Received", "by 10.107.8.42 with SMTP id 42mr5035106ioi.144.1473851921266; Wed, 14 Sep 2016 04:18:41 -0700 (PDT)"],
				["Mime-Version", "1.0"],
				["From", "My Dude <bar@example.com>"],
				["Date", "Wed, 14 Sep 2016 14:18:40 +0300"],
				["Message-Id", "<CAOZKUiU8J2iiB-Hku-q2aZPY66znvmZPzx5WEY_BfZRO4y6uwg@mail.example.com>"],
				["Subject", "Re: Hello"],
				["To", "YOU@YOU_DOMAIN"],
				["Content-Type", "multipart/alternative; boundary=\"001a113eea4e3824f4053c75e429\""]
			],
			"Dkim-Signature": "... metadata",
			"content-id-map": {},
			"subject": "Re: Hello",
			"stripped-html": "<html><head></head><body><div dir=\"ltr\">Hi dude!<br></div><div class=\"gmail_extra\"><br><br></div>\n</body></html>",
			"from": "My Dude <bar@example.com>",
			"sender": "bar@example.com",
			"stripped-text": "Hi dude!",
			"X-Mailgun-Incoming": "Yes",
			"X-Received": "by 10.107.8.42 with SMTP id 42mr5035106ioi.144.1473851921266; Wed, 14 Sep 2016 04:18:41 -0700 (PDT)",
			"X-Gm-Message-State": "... metadata",
			"attachments": [],
			"body-html": "<html><head></head><body><div dir=\"ltr\">Hi dude!<br></div><div class=\"gmail_extra\"><br><br></div>\n</body></html>",
			"References": "<CAOZKUiUkz1nFA8TUiJ18zBG9vdy5gAaw-feWU_jh0CbAsXfRwg@mail.example.com>",
			"Mime-Version": "1.0",
			"In-Reply-To": "<CAOZKUiX0H9e9NYvHEMdscMDkuKB1Ti8y42C=8CSoiCgmPYkjqQ@mail.example.com>",
			"Date": "Wed, 14 Sep 2016 14:18:40 +0300",
			"Message-Id": "<CAOZKUiU8J2iiB-Hku-q2aZPY66znvmZPzx5WEY_BfZRO4y6uwg@mail.example.com>",
			"Content-Type": "multipart/alternative; boundary=\"001a113eea4e3824f4053c75e429\"",
			"body-plain": "33333\r\n\r\nOn Wed, Sep 14, 2016 at 2:18 PM, My Dude <bar@example.com\r\n> wrote:\r\n\r\n> ...",
			"Subject": "Re: Hello"
		}]
	}
}
```

###Returned fields

| Field               | Type   | Description  |
| --------------------|--------| -------------|
| `recipients`        |string  | Recipient of the message as reported by `MAIL` `TO` during SMTP chat. |
| `sender`            |string  | Sender of the message as reported by `MAIL` `FROM` during SMTP chat. Note: this value may differ from `From` MIME header. |
| `from`              |string  | Sender of the message as reported by From message header, for example “Bob Lee <blee@mailgun.net>”. |
| `subject`           |string  | subject string. |
| `body-plain`        |string  | Text version of the email. This field is always present. If the incoming message only has HTML body, Mailgun will create a text representation for you. |
| `stripped-text`     |string  | Text version of the email. This field is always present. If the incoming message only has HTML body, Mailgun will create a text representation for you. |
| `stripped-signature`|string  | The signature block stripped from the plain text message (if found). |
| `body-html`         |string  | HTML version of the message, if message was multipart. Note that all parts of the message will be posted, not just text/html. For instance if a message arrives with “foo” part it will be posted as “body-foo”.  |
| `stripped-html`     |string  | HTML version of the message, without quoted parts. |
| `attachments`       |string  | Contains a json list of metadata objects, one for each attachment, see below. |
| `message-url`       |string  | A URL that you can use to get and/or delete the message. |
| `content-id-map`    |string  | JSON-encoded dictionary which maps Content-ID (CID) of each attachment to the corresponding attachment-x parameter. This allows you to map posted attachments to tags like <img src='cid'> in the message body. |
| `message-headers`   |string  | List of all MIME headers dumped to a json string (order of headers preserved). |
| `content-id-map`    |string  | JSON-encoded dictionary which maps Content-ID (CID) of each attachment to the corresponding `attachment-x` parameter. This allows you to map posted attachments to tags like <img src='cid'> in the message body. |

The attachments JSON contains the following items.

| Field            | Type   | Description  |
| -----------------|--------| -------------|
| `size`           |integer |Indicates the size of the attachment in bytes. |
| `url`            |string  |Contains the url where the attachment can be found. |
| `name`           |string  |The name of the attachment |
| `content-type`   |string  |The content type of the attachment |

(*) These are the parameters when the mimeRaw id `True`

| Field          | Type   | Description  |
| -------------  |--------| -------------|
| `recipient`    |string  |Recipient of the message.|
| `sender`       |string  |Sender of the message as reported by SMTP MAIL FROM.|
| `from`         |string  |Sender of the message as reported by From message header, for example “Bob <bob@example.com>”.|
| `subject`      |string  |Subject string.|
| `body-mime`    |string  |Full MIME envelope. You will need a MIME parsing library to process this data.|
