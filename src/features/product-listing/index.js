import React from 'react'
import ProductListItem from './product-list-item';
import {connect} from 'react-redux';

import fetchApi from '../../modules/fetch-api'

// Converted from stateless function to a life cycle class
class ProductListing extends React.Component {

    // Initialization that requires DOM nodes or loading data from remote endpoint or setting up subscriptions
    // should go in componentDidMount - Invoked immediately after a component is mounted.
    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        const { loadProducts } = this.props; // keyed in from redux - Destructure loadProducts out of this.props
        //fetchApi('get', "https://cc-rocky.firebaseapp.com/products.json")
        fetchApi('get', 'products.json')
          .then((json => {
              loadProducts(json)
          }))
    }

    render() {
        //console.log(this.props);
        // Destructure to variables (sets variables to values of the matching properties from "this.props")
        const { addToCart, removeFromCart, products, cart } = this.props;
        return <div className='product-listing'>
            {
                products.map(product =>
                  <ProductListItem
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                  />)
            }
        </div>
    }
}

// Grabs all values for state and map to props (props.cart, props.products etc..) -
function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products
    }
}

// Actions to do stuff inside the cart
function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (json) => {
          dispatch({ type: 'load', payload: json.products })
        },
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