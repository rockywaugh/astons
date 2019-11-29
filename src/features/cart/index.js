import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
//import {NavLink} from "react-router-dom";

const sort = (items) => {
  //console.log(items);
  // First time called takes 0,1 indices, next time 1,2 indices
  return items.sort((a, b) => a.id < b.id)
};

function Cart(props) {
  console.log('cart', props.cart);
  const { pathname } = props.location;
  return props.cart.length ?
      <ul className="list-group mb-3">
        {
          sort(props.cart).map(item => <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{item.name} ({item.quantity})</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">
            ${Number(item.quantity * item.price).toFixed(2)}

            <div className={pathname === '/cart' ? "items btn-group btn-group-sm" : "d-none"} role="group" aria-label="Small button group">
              <button type="button"
                      className="btn btn-secondary"
                      onClick={(e) => props.addToCart(item)}>+
              </button>
              <button type="button"
                      className="btn btn-secondary"
                      onClick={(e) => props.removeFromCart(item)}>-
              </button>
              <button type="button"
                      className="btn btn-secondary"
                      onClick={(e) => props.removeAllFromCart(item)}>x
              </button>
            </div>

          </span>
          </li>)
        }
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total(USD)</span>
          <strong>${props.cart.reduce((acc, item) => {
            console.log('acc', acc);
            console.log('item', item);
            return (acc + (item.quantity * item.price))
          }, 0)}</strong>
        </li>
      </ul> : <div/>
}

function mapStateToProps(state) {

  //console.log('cart index, mapStateToProps');

  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  //console.log('cart index, mapDispatchToProps');
  return {
    addToCart: (item) => {
      dispatch({type: 'add', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'remove', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'remove_all', payload: item})
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))