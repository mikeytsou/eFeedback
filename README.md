# eFeedback

eFeedback is a fullstack MERN application that allows users, particulary marketing to startup owners or product managers, to send out bulk emails in the form of surveys to their customers to collect some amount of feedback to ultimately provide a better application or service. Users with a Google account can easily sign up for eFeeback with the implementation of OAuth. User payments for each email sent is handled with the Stripe API while the SendGrid API handles the back-end email functionality.

# Preview

Logging in with Oauth takes the users to their homepage, where they can view a list of all the emails they've sent out. Survey results are tracked are tracked in real time with SendGrid.

![](/github_eFeedback_surveys.png)

Users can purchase more credits if they need to send out more emails.

![](/github_eFeedback_stripe.png)

Users must provide a title, subject, body, and recipient(s) inorder to send out emails.

![](/github_eFeedback_form.png)

# Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Passport.js

Stripe API

SendGrid API

React.js

Redux

Semantic UI
