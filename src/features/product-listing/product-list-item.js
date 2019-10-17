import React from 'react';
import AddToCartButton from './button-add-to-cart'
import RemoveFromCartButton from './button-remove-from-cart'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3> {props.product.name}</h3>
        <img
            alt={props.product.name}
            height={100}
            title={props.product.name}
            src={`/images/products/${props.product.image}`}
        />
        <div>{props.product.description}</div>
        <div>${props.product.price}</div>
        <div>
            <AddToCartButton
              cartItem={props.cartItem}
              product={props.product}
              addToCart={props.addToCart}
            />

            {
                props.cartItem ?
                  <RemoveFromCartButton
                    cartItem={props.cartItem}
                    product={props.product}
                    removeFromCart={props.removeFromCart()}
                  /> : null
            }

        </div>
    </div>
}