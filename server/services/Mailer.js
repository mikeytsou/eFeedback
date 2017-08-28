const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../conf/keys');

class Mailer extends helper.Mail {

}

module.exports = Mailer;
