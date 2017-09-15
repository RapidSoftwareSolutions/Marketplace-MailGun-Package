[info]:https://github.com/RapidSoftwareSolutions/Marketplace-MailGun-Package/blob/master/instructions/domaininfo.png?raw=true
[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/MailGun/functions?utm_source=RapidAPIGitHub_MailGunFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)


# MailGun Package
Use the MailGun API to access the product's features, such as sending E-Mails, webhooks, Email Validation etc.

## How to get credentials:
1. Go to MailGun website https://mailgun.com/sessions/new.
2. Register or log in.
3. Go to ***Domains*** tab.
4. Create or select domain.
5. Copy domain name and apiKey



## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

 ## MailGun.sendEmail
 | Field              | Type       | Description
 |--------------------|------------|----------
 | apiKey             | Credentials| The api key obtained from MailGun.
 | domain             | String     | Mailgun account contain email domain.
 | from               | String     | Email address for From header.
 | to                 | List       | Email address of the recipient(s). ('Bob bob@host.com'). You can use commas to separate multiple recipients.
 | cc                 | List       | Same as 'To' but for Cc.
 | bcc                | List       | Same as 'To' but for Bcc.
 | subject            | String     | Message subject.
 | text               | String     | Body of the message. (text version).
 | html               | String     | Body of the message. (HTML version).
 | inline             | String     | Attachment with inline disposition.
 | o:tag              | List       | Tag string.
 | o:campaign         | String     | Id of the campaign the message belongs to. See [um-campaign-analytics](http://mg-documentation.readthedocs.io/en/latest/user_manual.html?highlight=um-campaign-analytics#mailing-lists) for details.
 | o:dkim             | Select     | Enables/disables DKIM signatures on per-message basis. Pass yes or no.
 | o:deliverytime     | DatePicker | Desired time of delivery. See [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format). Note: Messages can be scheduled for a maximum of 3 days in the future.
 | o:testmode         | Select     | Enables sending in test mode. Pass yes if needed. See Sending in [Test Mode](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#manual-testmode).
 | o:tracking         | Select     | Toggles tracking on a per-message basis, see [Tracking Messages](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#tracking-messages) for details. Pass yes or no.
 | o:tracking-clicks  | Select     | Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.
 | o:tracking-opens   | Select     | Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.
 | o:require-tls      | Boolean    | This requires the message only be sent over a TLS connection. (True or False)
 | o:skip-verification| Boolean    | If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.
 | h:X-My-Header      | String     | h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).
 | v:my-var           | JSON       | v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See [Attaching Data to Messages](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#manual-customdata) for more information.

 ## MailGun.sendEmailMIME
 Posts a message in MIME format.

 | Field              | Type       | Description
 |--------------------|------------|----------
 | apiKey             | Credentials| The api key obtained from MailGun.
 | domain             | String     | Mailgun account contain email domain.
 | from               | String     | Email address for From header.
 | to                 | List       | Email address of the recipient(s). ('Bob bob@host.com'). You can use commas to separate multiple recipients.
 | cc                 | List       | Same as 'To' but for Cc.
 | bcc                | List       | Same as 'To' but for Bcc.
 | subject            | String     | Message subject.
 | text               | String     | Body of the message. (text version).
 | html               | String     | Body of the message. (HTML version).
 | inline             | String     | Attachment with inline disposition.
 | o:tag              | List       | Tag string.
 | o:campaign         | String     | Id of the campaign the message belongs to. See [um-campaign-analytics](http://mg-documentation.readthedocs.io/en/latest/user_manual.html?highlight=um-campaign-analytics#mailing-lists) for details.
 | o:dkim             | Select     | Enables/disables DKIM signatures on per-message basis. Pass yes or no.
 | o:deliverytime     | DatePicker | Desired time of delivery. See [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format). Note: Messages can be scheduled for a maximum of 3 days in the future.
 | o:testmode         | Select     | Enables sending in test mode. Pass yes if needed. See Sending in [Test Mode](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#manual-testmode).
 | o:tracking         | Select     | Toggles tracking on a per-message basis, see [Tracking Messages](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#tracking-messages) for details. Pass yes or no.
 | o:tracking-clicks  | Select     | Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.
 | o:tracking-opens   | Select     | Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.
 | o:require-tls      | Boolean    | This requires the message only be sent over a TLS connection. (True or False)
 | o:skip-verification| Boolean    | If set to True, the certificate and hostname will not be verified when trying to establish a TLS connection and Mailgun will accept any certificate during delivery.
 | h:X-My-Header      | String     | h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case).
 | v:my-var           | JSON       | v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See [Attaching Data to Messages](http://mg-documentation.readthedocs.io/en/latest/user_manual.html#manual-customdata) for more information.

## MailGun.getStoredMessages
Returns stored messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getAcceptedMessages
Returns accepted messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getRejectedMessages
Returns rejected messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getDeliveredMessages
Returns delivered messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getFailedMessages
Returns failed messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getOpenedMessages
Returns opened messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getClickedMessages
Returns clicked messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getUnsubscribedMessages
Returns unsubscribed messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getComplainedMessages
Returns complained messages.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Mailgun account contain email domain.
| begin    | DatePicker | The beginning of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| end      | DatePicker | The end of the search time range. It can be specified as a string (see [Date Format](http://mg-documentation.readthedocs.io/en/latest/api-intro.html#date-format)) or linux epoch seconds.
| ascending| Select     | Defines the direction of the search time range and must be provided if the range end time is not specified. Can be either yes or no.
| limit    | Number     | Number of entries to return. (300 max)

## MailGun.getAllStats
Returns total stats for a given domain.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | Credentials| The api key obtained from MailGun.
| domain    | String     | Mailgun account contain email domain.
| event     | String     | The type of the event.
| start     | DatePicker | The starting time. Should be in unix epoch format.
| end       | DatePicker | The ending date. Should be in unix epoch format.
| resolution| Select     | Can be either hour, day or month. Default: day
| duration  | String     | Period of time with resoluton encoded. [Read more](http://mg-documentation.readthedocs.io/en/latest/api-stats.html#duration)

## MailGun.getEventStats
Returns a list of event stats items. Each record represents counts for one event per one day.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Name of the domain.
| limit    | Number     | Maximum number of records to return. (100 by default)
| skip     | Number     | Number of records to skip.
| event    | String     | Name of the event to receive the stats for. Note that you can specify this parameter multiple times to fetch stats for several events at the same time.
| startDate| String     | The date to receive the stats starting from. Should have ISO8601 format (YYYY-MM-DD).

## MailGun.getAllTags
Returns a list of tags for a domain. Provides with the pagination urls if the result set is to long to be returned in a single response.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| limit | Number     | Maximum number of records to return. (100 by default)

## MailGun.getSingleTag
Returns a list of tags for a domain. Provides with the pagination urls if the result set is to long to be returned in a single response.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| tag   | String     | Name of the tag.

## MailGun.updateTag
Updates a given tag with the information provided.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| domain     | String     | Name of the domain.
| tag        | String     | Name of the tag.
| description| String     | Optional description of a tag.

## MailGun.getTagStats
Returns statistics for a given tag.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | Credentials| The api key obtained from MailGun.
| domain    | String     | Name of the domain.
| tag       | String     | Name of the tag.
| event     | String     | The type of the event.
| start     | DatePicker | The starting time. Should be in unix epoch format.
| end       | DatePicker | The ending date. Should be in unix epoch format.
| resolution| Select     | Can be either hour, day or month. Default: day
| duration  | String     | Period of time with resoluton encoded. [Read more](http://mg-documentation.readthedocs.io/en/latest/api-stats.html#duration)

## MailGun.deleteTag
Deletes the tag. The statistics for the tag are not destroyed.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| tag   | String     | Name of the tag.

## MailGun.getAllBounces
Paginate over a list of bounces for a domain.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| limit | Number     | Maximum number of records to return (optional, default: 100, max: 10000)

## MailGun.getSingleBounce
Fetch a single bounce event by a given email address. Useful to check if a given email address has bounced before.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| email | String     | Email address

## MailGun.addBounce
Add a bounce record to the bounce list. Updates the existing record if the address is already there.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Name of the domain.
| address  | String     | Valid email address
| code     | String     | Error code
| error    | String     | Error description (default: empty string)
| createdAt| String     | Timestamp of a bounce event.

## MailGun.addMultipleBounces
Add multiple bounce records to the bounce list in a single API call.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| bounces| Array      | Records to the bounce list.

## MailGun.deleteBounce
Clears a given bounce event. The delivery to the deleted email address resumes until it bounces again.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| address| String     | Valid email address

## MailGun.deleteBounceList
Clears all bounced email addresses for a domain. Delivery to the deleted email addresses will no longer be suppressed.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.

## MailGun.getAllUnsubscribes
Paginate over a list of unsubscribes for a domain.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| limit | Number     | Number of records to return (optional, default: 100, max: 10000).

## MailGun.getSingleUnsubscribeRecord
Fetch a single unsubscribe record. Can be used to check if a given address is present in the list of unsubscribed users.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| address| String     | Valid email address

## MailGun.addAddressToUnsubscribeTable
Add an address to the unsubscribe table.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Name of the domain.
| address  | String     | Valid email address
| tag      | String     | Tag to unsubscribe from, use * to unsubscribe an address from all domain’s correspondence (optional, default: *)
| createdAt| String     | Timestamp of a bounce event.


## MailGun.deleteUnsubscribeRecords
Remove an address from the unsubscribes list. If tag parameter is not provided, completely removes an address from the list.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| address| String     | Valid email address
| tag    | String     | Specific tag to remove.

## MailGun.getAllComplaints
Paginate over a list of complaints for a domain.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| limit | Number     | Maximum number of records to return (optional, default: 100, max: 10000)

## MailGun.getSingleComplaint
Fetch a single spam complaint by a given email address. This is useful to check if a particular user has complained.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| address| String     | Valid email address

## MailGun.addSingleComplaint
Add an address to the complaints list.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | Credentials| The api key obtained from MailGun.
| domain   | String     | Name of the domain.
| address  | String     | Valid email address
| createdAt| String     | Timestamp of a bounce event.


## MailGun.deleteComplaint
Remove a given spam complaint.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| domain | String     | Name of the domain.
| address| String     | Valid email address

## MailGun.getAllRoutes
Fetches the list of routes. Note that routes are defined globally, per account, not per domain as most of other API calls.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| limit | Number     | Maximum number of records to return. (100 by default).
| skip  | Number     | Number of records to skip. (0 by default).

## MailGun.getSingleRoute
Returns a single route object based on its ID.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| routeId| String     | ID of the route.

## MailGun.createRoute
Creates a new route.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| priority   | Number     | Integer: smaller number indicates higher priority. Higher priority routes are handled first. Defaults to 0.
| description| String     | An arbitrary string.
| expression | String     | A filter expression like match_recipient('.*@gmail.com').
| action     | String     | Route action. This action is executed when the expression evaluates to True. Example: forward('alice@example.com')

## MailGun.updateRoute
Updates a given route by ID. All parameters are optional: this API call only updates the specified fields leaving others unchanged.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| routeId    | String     | ID of the route.
| priority   | Number     | Integer: smaller number indicates higher priority. Higher priority routes are handled first. Defaults to 0.
| description| String     | An arbitrary string.
| expression | String     | A filter expression like match_recipient('.*@gmail.com').
| action     | String     | Route action. This action is executed when the expression evaluates to True. Example: forward('alice@example.com')

## MailGun.deleteRoute
Deletes a route based on the id.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| routeId| String     | ID of the route.

## MailGun.getAllWebhooks
Returns a list of webhooks set for the specified domain.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.

## MailGun.getSingleWebhook
Returns details about a the webhook specified in the URL.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| domain     | String     | Name of the domain.
| webhookName| String     | Name of the webhook.

## MailGun.createWebhook
Creates a new webhook.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| domain| String     | Name of the domain.
| id    | String     | Name of the webhook.
| url   | String     | URL for the webhook event.

## MailGun.updateWebhook
Creates a new webhook.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| domain     | String     | Name of the domain.
| webhookName| String     | Name of the webhook.
| id         | String     | Name of the webhook.
| url        | String     | URL for the webhook event.

## MailGun.deleteWebhook
Deletes an existing webhook.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| domain     | String     | Name of the domain.
| webhookName| String     | Name of the webhook.

## MailGun.getAllMailingLists
Paginate over mailing lists under your account.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| limit | Number     | Maximum number of records to return (optional, default: 100, max: 10000)

## MailGun.getSingleMailingList
Returns a single mailing list by a given address.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | Credentials| The api key obtained from MailGun.
| address| String     | Valid email address

## MailGun.createMailingList
Creates a new mailing list.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| address    | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| name       | String     | Mailing list name, e.g. Developers.
| description| String     | A description.
| accessLevel| String     | List access level, one of: readonly (default), members, everyone

## MailGun.updateMailingList
Update mailing list properties, such as address, description or name

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | Credentials| The api key obtained from MailGun.
| email      | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| address    | String     | New mailing list address, e.g. devs@mg.net
| name       | String     | Mailing list name, e.g. Developers.
| description| String     | A description.
| accessLevel| String     | List access level, one of: readonly (default), members, everyone

## MailGun.deleteMailingList
Deletes a mailing list.

| Field | Type       | Description
|-------|------------|----------
| apiKey| Credentials| The api key obtained from MailGun.
| email | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>

## MailGun.getMailingListMembers
Paginate over list members in the given mailing list

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | Credentials| The api key obtained from MailGun.
| address   | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| subscribed| Select     | yes to lists subscribed, no for unsubscribed. list all if not set
| limit     | Number     | Maximum number of records to return (optional, default: 100, max: 10000)

## MailGun.getSingleMailingListMember
Retrieves a mailing list member.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | Credentials| The api key obtained from MailGun.
| address      | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| memberAddress| String     | Member email-address

## MailGun.addMemberToMailingList
Adds a member to the mailing list.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | Credentials| The api key obtained from MailGun.
| address   | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| name      | String     | Optional member name.
| vars      | JSON       | JSON-encoded dictionary string with arbitrary parameters, e.g. {'gender':'female','age':27}
| subscribed| Select     | yes to add as subscribed (default), no as unsubscribed
| upsert    | Select     | yes to update member if present, no to raise error in case of a duplicate member (default)

## MailGun.updateMember
Updates a mailing list member with given properties.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | Credentials| The api key obtained from MailGun.
| address      | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| memberAddress| String     | Member email-address
| name         | String     | Optional member name.
| vars         | JSON       | JSON-encoded dictionary string with arbitrary parameters, e.g. {'gender':'female','age':27}
| subscribed   | Select     | yes to add as subscribed (default), no as unsubscribed
| upsert       | Select     | yes to update member if present, no to raise error in case of a duplicate member (default)

## MailGun.deleteMember
Delete a mailing list member.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | Credentials| The api key obtained from MailGun.
| address      | String     | A valid email address for the mailing list, e.g. developers@mailgun.net, or Developers <devs@mg.net>
| memberAddress| String     | Member email-address

## MailGun.validateAddress
Given an arbitrary address, validates address based off defined checks.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | Credentials| The api key obtained from MailGun.
| address            | String     | An email address to validate. (Maximum: 512 characters)
| mailboxVerification| Select     | If set to true, a mailbox verification check will be performed against the address.
