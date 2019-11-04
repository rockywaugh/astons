import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkoutpage';

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
  </Switch>
);

export default Router;