import React from 'react'
import ProductListItem from './product-list-item';
import {connect} from "react-redux";
import {cartItemsWithQuantities} from "../cart";

function ProductListing(props) {
    return <div className='product-listing'>
        {
            props.products.map(product =>
                <ProductListItem
                    product={product}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />)
        }
    </div>
}

// Grabs all values for cart state and map to props (props.cart...)
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

// Actions to do stuff inside the cart
function mapDispatchToProps(dispatch) {
    return {
        // See in reducer.js the action.payload and action.type
        addToCart: (item) => {
            dispatch({type: 'add', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'remove', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)