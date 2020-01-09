import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {CardElement, injectStripe} from 'react-stripe-elements'
import fetchApi from '../../modules/fetch-api'
import { connect } from 'react-redux'

class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  // TODO: Checkout form has to post: first, last name, email, shipping,
  //  billing address (offer option if both are same), credit card info
  // TODO: API has to run credit card purchase first and if successful,
  //  submit order - adds order to database and notification sent to buyer and seller via email
  submit(values) {
    values.token = this.props.stripe.createToken({name: "Name"});

    console.log('form submit values', values);

    const {email, firstName, lastName} = values.order;

    const {cart} = this.props;

    console.log('form submit cart', cart);
/*
    fetchApi('post', '/api/pay', {
      order: {
        firstName, // ES6 shorthand, uses the variable name as the key and variable value as the property value
        lastName,
        email,
        token: values.token.id,
        order_items_attributes: cart.map(item => ({
          product_id: item.id,
          qty: item.quantity
        }))
      }
    }).then(json => {
      if (json.errors) {
        alert('something went wrong');
        return
      }
      document.location.href = `/orders/${json.id}`
    })
*/

  }
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="checkout">
        <h4 className="mb-3">Billing address</h4>

        <form onSubmit={handleSubmit(this.submit)}>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="order[firstName]">Fist name</label>
              <Field type="text" className="form-control" name='order[firstName]' component="input" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="order[lastName]">Last name</label>
              <Field type="text" className="form-control" name='order[lastName]' component="input" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="order[email]">Email <span className="text-muted">(Optional)</span></label>
            <Field type="email" className="form-control" name='order[email]' component="input"
                   placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="order[address]">Address</label>
            <input type="text" className="form-control" name='order[address]' id="address" placeholder="1234 Main St"
                   required=""/>
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="order[address2]">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" name='order[address2]' id="address2"
                   placeholder="Apartment or suite"/>
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="order[country]">Country</label>
              <select className="custom-select d-block w-100" name='order[country]' id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="order[state]">State</label>
              <select className="custom-select d-block w-100" name='order[state]' id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="order[zip]">Zip</label>
              <input type="text" className="form-control" name='order[zip]' id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="mb-4"/>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name='order[same-address]' id="same-address"/>
            <label className="custom-control-label" htmlFor="order[same-address]">Shipping address is the same as my
              billing address</label>
          </div>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name='order[save-info]' id="save-info"/>
            <label className="custom-control-label" htmlFor="order[save-info]">Save this information for next
              time</label>
          </div>

          <hr className="mb-4"/>
          <CardElement/>
          <hr className="mb-4"/>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Complete checkout</button>

        </form>
      </div>
    );
  }
}

// Wrapped function
CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(injectStripe(CheckoutForm));

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