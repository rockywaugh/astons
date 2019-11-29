import React from 'react';

export default function AddToCartButton(props) {
  return <button type="button" className="btn btn-secondary" onClick={() => props.addToCart(props.product)}>
    Add to Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
  })
  </button>
}