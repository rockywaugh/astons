import React from 'react'
import {connect} from 'react-redux' // {connect} is a name module
import Cart from '../cart'

// Stateless component
function Checkout(props) {
  const { cart } = props;

  console.log('checkout index', cart);

  return <div>
    <div style={{ border: '1px solid black'}}>
      <Cart/>
    </div>
  </div>
}

function mapStateToProps(state) {
  console.log('cart index, mapStateToProps');
  console.log(state);
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Checkout)