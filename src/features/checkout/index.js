import React from 'react'
import {connect} from 'react-redux' // {connect} is a name module
import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from "../../modules/fetch-api";

function submitOrder(values, cart) {
  const { email, name } = values.order;

  fetchApi('post', 'foo', {
    order: {
      name, // ES6 shorthand, uses the variable name as the key and variable value as the property value
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  }).then(json => {
    if(json.errors) {
      alert('something went wrong');
      return
    }
    document.location.href = `/orders/${json.id}`
  })
}

// Stateless component
function Checkout(props) {
  const { cart } = props;

  console.log('checkout index', cart);

  return <div>
    <div style={{ border: '1px solid black'}}>
      <Cart/>
    </div>

    <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
  </div>
}

function mapStateToProps(state) {
  console.log('cart index, mapStateToProps');

  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Checkout)