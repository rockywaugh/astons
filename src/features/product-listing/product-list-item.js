import React from 'react';
import AddToCartButton from './button-add-to-cart'
import RemoveFromCartButton from './button-remove-from-cart'

export default function ProductListItem(props) {
    //console.log(props);

    return <div className='product-list-item'>
        <img
          alt={props.product.name}
          height={100}
          title={props.product.name}
          src={`/images/products/${props.product.image}`}
        />
        <h5>{props.product.name}</h5>
        <p className="description">{props.product.description}</p>
        <p>${Number(props.product.price).toFixed(2)}</p>
        <p>
            <div className="items btn-group-sm" role="group" aria-label="Small button group">
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
                        removeFromCart={props.removeFromCart}
                      /> : null
                }
            </div>
        </p>
    </div>
}