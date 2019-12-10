import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadState, saveState } from '../modules/local-storage';

import cartReducer from '../features/cart/reducer';
import productsReducer from '../features/product-listing/reducer';

const preloadedState = loadState();

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer
});

const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({
        todos: store.getState().todos,
        cart: store.getState().cart,
        products: store.getState().products,
        form: store.getState().form
    })
});

export default store