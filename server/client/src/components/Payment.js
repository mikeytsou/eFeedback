import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

class Payment extends Component {
  render() {
    return(
      <StripeCheckout
        name="eFeedback"
        description="$5 for 5 email credits"
        amount={500} // $5.00 in cents
        token={(token) => this.props.handleToken(token)} // expects to receive a callback function and is called after successfully retreiving an authorization token
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <a className="active green item">Add Credits</a>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payment);
