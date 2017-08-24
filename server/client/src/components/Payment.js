import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
  render() {
    debugger;

    return(
      <StripeCheckout
        amount={500} // $5.00 in cents
        token={(token) => console.log(token)} // expects to receive a callback function and is called after successfully retreiving an authorization token
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
    );
  }
}

export default Payment;
