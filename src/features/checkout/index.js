import React from 'react'
import {connect} from 'react-redux' // {connect} is a name module
import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from "../../modules/fetch-api";
import {Elements, StripeProvider} from 'react-stripe-elements';

// TODO: Checkout form has to post: first, last name, email, shipping,
//  billing address (offer option if both are same), credit card info
// TODO: API has to run credit card purchase first and if successful,
//  submit order - adds order to database and notification sent to buyer and seller via email
function submitOrder(values, cart) {

  console.log('submitOrder', values);

  const {email, firstName, lastName} = values.order;

  fetchApi('post', 'foo', {
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
}

// Stateless component
function Checkout(props) {
  const {cart} = props;

  //console.log('checkout index', cart);

  return <div style={{padding:'25px', border: '1px solid gray'}}>
    <Cart/>
    <StripeProvider apiKey="pk_live_Zrar5vpahTcYIbdnqdaJXpLt00cy9xZqOm">
      <Elements>
        <CheckoutForm onSubmit={(values) => {

          return submitOrder(values, cart)

        }}/>
      </Elements>
    </StripeProvider>
  </div>
}

function mapStateToProps(state) {
  //console.log('cart index, mapStateToProps');

  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Checkout)