import React from 'react'
import {connect} from 'react-redux' // {connect} is a name module
import Cart from '../cart'
import CheckoutForm from './form'
import {Elements, StripeProvider} from 'react-stripe-elements';

// Stateless component
function Checkout(props) {
  return <div className="container">
    <div className="row">
      <div className="col-md-4 order-md-2 mb-4">
        <Cart/>
      </div>
      <div className="col-md-8 order-md-1">
        <StripeProvider apiKey="pk_test_ty0U4ZQg7NtgbvGNHb5TPYga00tifMogTU">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    </div>
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Checkout)