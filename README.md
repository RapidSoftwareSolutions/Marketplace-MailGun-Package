[info]:https://github.com/RapidSoftwareSolutions/Marketplace-MailGun-Package/blob/master/instructions/domaininfo.png?raw=true
[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/MailGun/functions?utm_source=RapidAPIGitHub_MailGunFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)


# MailGun Package
Use the MailGun API to access the product's features, such as sending E-Mails, webhooks, Email Validation etc.

## How to get credentials: 
1. [SignUp](https://mailgun.com/signup) or [SignIn](https://mailgun.com/sessions/new) to your MailGun account.
2. Go to ***Domains*** tab.
3. Create or select domain.
4. Copy domain name and apiKey:

![Domain info][info]

## MailGun.sendEmail
Sends an email.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from MailGun.
| domain             | String     | Required: Mailgun account contain email domain.
| mFrom              | String     | Required: Email address for From header.
| mTo                | String     | Required: Email address of the recipient(s). ('Bob <bob@host.com>'). You can use commas to separate multiple recipients.
| cc                 | String     | Same as 'To' but for Cc.
| bcc                | String     | Same as 'To' but for Bcc.
| subject            | String     | Required: Message subject.
| text               | String     | Required: Body of the message. (text version).
| html               | String     | Required: Body of the message. (HTML version).
| attachment         | File       | File attachment.
| inline             | String     | Attachment with inline disposition.
| o:tag              | String     | Tag string.
| o:campaign         | String     | Id of the campaign the message belongs to. See um-campaign-analytics for details.
| o:dkim             | String     | Enables/disables DKIM signatures on per-message basis. Pass yes or no.
| o:deliverytime     | String     | Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.
| o:testmode         | String     | Enables sending in test mode. Pass yes if needed. See Sending in Test Mode.
| o:tracking         | String     | Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no.
| o:tracking-clicks  | String     | Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.
| o:tracking-opens   | String     | Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.
| o:require-tls      | String     | This requires the message only be sent over a TLS connection. (True or False)
| o:skip-verification| String     | If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.
| h:X-My-Header      | String     | h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).
| v:my-var           | JSON       | v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.

## MailGun.sendEmailMIME
Posts a message in MIME format.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from MailGun.
| domain             | String     | Required: Mailgun account contain email domain.
| mFrom              | String     | Required: Email address for From header.
| mTo                | String     | Required: Email address of the recipient(s). ('Bob <bob@host.com>'). You can use commas to separate multiple recipients.
| subject            | String     | Required: Message subject.
| text               | String     | Required: Body of the message. (text version).
| html               | String     | Required: Body of the message. (HTML version).
| o:tag              | String     | Tag string.
| o:campaign         | String     | Id of the campaign the message belongs to. See um-campaign-analytics for details.
| o:dkim             | String     | Enables/disables DKIM signatures on per-message basis. Pass yes or no.
| o:deliverytime     | String     | Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.
| o:testmode         | String     | Enables sending in test mode. Pass yes if needed. See Sending in Test Mode.
| o:tracking         | String     | Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no.
| o:tracking-clicks  | String     | Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.
| o:tracking-opens   | String     | Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.
| o:require-tls      | String     | This requires the message only be sent over a TLS connection. (True or False)
| o:skip-verification| String     | If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.
| h:X-My-Header      | String     | h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).
| v:my-var           | JSON       | v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.

## MailGun.getMessages
Returns stored messages.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailGun.
| domain    | String     | Required: Mailgun account contain email domain.
| rawMime   | String     | It will help you to get the raw MIME True OR False (def).
