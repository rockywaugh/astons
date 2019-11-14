import React from 'react'
import {connect} from 'react-redux'

const sort = (items) => {
  //console.log(items);
  // First time called takes 0,1 indices, next time 1,2 indices
  return items.sort((a, b) => a.id < b.id)
};

function Cart(props) {
  return props.cart.length ? <table>
    <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {
      sort(props.cart).map(item => <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>
          <button
            onClick={(e) => props.addToCart(item)}
          >+
          </button>

          <button
            onClick={(e) => props.removeFromCart(item)}
          >-
          </button>

          <button
            onClick={(e) => props.removeAllFromCart(item)}
          >Remove all from cart
          </button>
        </td>
        <td>
        </td>
      </tr>)
    }
    </tbody>
  </table> : <div></div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Cart)