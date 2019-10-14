import React from 'react'

export default function ProductListItem(props) {
    return <div>
        <h3> { props.product.name }</h3>
        <img
            alt={ props.product.name }
            height={100}
            title={props.product.name}
            src={`/images/products/${props.product.image}`}
            />
            <div>{ props.product.description }</div>
            <div>${ props.product.price }</div>
            <div>
                <button>Add to Cart</button>
            </div>
    </div>
}