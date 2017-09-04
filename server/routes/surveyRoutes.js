const _ = require('lodash');
const Path = require('path-parser'); // helps extract the :surveyId and :choice
const { URL } = require('url'); // helps parse urls
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, (req, res) => {
    Survey.find({_user: req.user.id})
      .then((surveys) => res.send(surveys));
  });

  // redirects after email has been responded
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for responding!');
  });

  // handles recipients click events
  app.post('/api/surveys/webhooks', (req, res) => {
    const path = new Path('/api/surveys/:surveyId/:choice');

    const events = _.map(req.body, (event) => {
      const pathname = new URL(event.url).pathname; // extract the route path '/api/surveys/aw31ad/yes' from the path
      const match = path.test(pathname) // returns an object or null
      if (match) {
        return { email: event.email, surveyId: match.surveyId, choice: match.choice };
      }
    });

    const compactEvents = _.compact(events); // takes an array and removes all elements that are 'undefined'
    const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId'); // go through compactEvents and look at the email and surveyId property and remove duplicates
    const updateEvents = _.each(uniqueEvents, (event) => {
      Survey.updateOne({ // find AND update one survey that matches all the following properties
        _id: event.surveyId,
        recipients: {
          $elemMatch: { email: event.email, responded: false } // look for a matching recipient in the found survey that matches the email and responded false
        }
      }, {
        $inc: { [event.choice]: 1 }, // increment the 'yes' or 'no' property by 1 in the survey model
        $set: { 'recipients.$.responded': true }, // set responded to 'true' for the found recipient in $elemMatch
        lastResponded: new Date()
      }).exec();
    });

    console.log(uniqueEvents);
    res.send({});
  });

  // create new survey and send out email
  app.post('/api/surveys', requireLogin, requireCredits, async (req,res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map((email) => { return { email: email.trim() } }),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
