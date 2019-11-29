import React from 'react';

export default function RemoveFromCartButton(props) {
  return <button type="button" className="btn btn-secondary" onClick={() => props.removeFromCart(props.cartItem)}>
    Remove
  </button>
}