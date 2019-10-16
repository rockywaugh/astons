import React from 'react'

export default function ProductListItem(props) {

    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];
    //const productImage = require(`../../images/products/${props.product.image}`);

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
            <button onClick={() => props.addToCart(props.product)}>
                Add to Cart ({
                (thisItemInCart && thisItemInCart.quantity) || 0
            })
            </button>
        </div>
    </div>
}