import React from 'react';

export default function RemoveFromCartButton(props) {
  return <button onClick={() => props.removeFromCart(props.cartItem)}>
    Remove
  </button>
}