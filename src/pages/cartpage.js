import React from 'react';
import Cart from '../features/cart'

export default function CartPage(props) {
  console.log('cartpage, mapStateToProps');
  return <div>
    <h2>My Cart</h2>
    <Cart />
  </div>
}