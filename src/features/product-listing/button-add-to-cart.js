import React from 'react';

export default function AddToCartButton(props) {
  return <button onClick={() => props.addToCart(props.product)}>
    Add to Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
  })
  </button>
}