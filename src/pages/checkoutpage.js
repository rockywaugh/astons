import React from 'react';
import Checkout from '../features/checkout'

export default function CheckoutPage(props) {
  console.log('checkoutpage, mapStateToProps');
  return <div>
    <h2>Check Out</h2>
    <Checkout />
  </div>
}