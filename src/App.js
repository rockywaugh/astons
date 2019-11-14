import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Router from './Router';

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Navigation = ({ cart }) => <nav>
  <ul className="top-menu">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart ({cart.reduce((accumulator, item) => {
      return accumulator + item.quantity; // Become expert at using "reduce" (along with map, filter)
    }, 0)})</NavLink></li>
    <li><NavLink to='/checkout'>Check Out</NavLink></li>
  </ul>
</nav>;

/*
class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_live_Zrar5vpahTcYIbdnqdaJXpLt00cy9xZqOm">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;

*/
class App extends Component {
  render() {
    return <div className="page-container">
      <Navigation { ...this.props }/>
      <Router/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App)); // withRouter needed to wrap redux connect with react routing

