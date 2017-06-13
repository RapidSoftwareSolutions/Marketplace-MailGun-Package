let assert = require('chai').assert;
let request = require('supertest-as-promised');

let app = require('../index');
let apiKey = 'key-8bd332813bcf19eaad7ab28b99397b74',
    domain = 'sandbox97528515a5a448cc8c395be329aa95a3.mailgun.org',
    mFrom = 'dima.shirokoff@rapidapi.com',
    mTo = 'dima.shirokoff@rapidapi.com',
    to = 'to',
    subject = 'Test',
    text = 'hello';

describe('/sendEmail function', () => {
    it('should send email', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/sendEmail')
        .send({args: { apiKey, domain, mFrom, mTo, to, subject, text }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
    
    // it('should return error callback', () => {
    //     return request(app)
    //     .post('/api/'+ global.PACKAGE_NAME +'/sendEmail')
    //     .send({args: { apiKey, mFrom, mTo, to, subject, text }})
    //     .expect(200)
    //     .then((data) => {
    //         assert.equal(data.body.callback, 'error');
    //     });
    // });
});

describe('/sendEmailMIME function', () => {
    it('should send email (MIME)', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/sendEmailMIME')
        .send({args: { apiKey, domain, mFrom, mTo, to, subject, text }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
});

describe('/getMessages function', function() {
    this.timeout(5000);

    it('should get stored emails', () => {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getMessages')
        .send({args: { apiKey, domain, to }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
});