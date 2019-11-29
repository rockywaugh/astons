import React from 'react';

export default function RemoveFromCartButton(props) {
  return <button type="button" className="btn btn-warning" onClick={() => props.removeFromCart(props.cartItem)}>
    Remove
  </button>
}