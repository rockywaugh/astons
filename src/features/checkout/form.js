import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    values.token = this.props.stripe.createToken({name: "Name"});
    console.log('form submit values', values);
  }

  render() {
    const {handleSubmit} = this.props;
    //console.log('form props', this.props);
    return (
      <div className="checkout">
        <form onSubmit={handleSubmit(this.submit)}>
          <div>
            <label htmlFor="order[firstName]">Fist Name:</label><br/>
            <Field name='order[firstName]' component="input" type="text"/>
          </div>

          <div>
            <label htmlFor="order[lastName]">Last Name:</label><br/>
            <Field name='order[lastName]' component="input" type="text"/>
          </div>

          <div>
            <label htmlFor="order[email]">Email:</label><br/>
            <Field name='order[email]' component="input" type="email"/>
          </div>

          <p>Would you like to complete the purchase?</p>
          <CardElement/>
          <div>
            <button type="submit">Submit order</button>
          </div>
        </form>
      </div>
    );
  }
}

// Wrapped function
CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default injectStripe(CheckoutForm);

/*
function CheckoutForm(props) {
  const { handleSubmit } = props;

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="order[name]">Your name:</label><br/>
        <Field name='order[name]' component="input" type="text" />
      </div>

      <div>
        <label htmlFor="order[email]">Email:</label><br/>
        <Field name='order[email]' component="input" type="email" />
      </div>

      <div>
        <button type="submit">Submit order</button>
      </div>
    </form>
  </div>
}
export default CheckoutForm
*/