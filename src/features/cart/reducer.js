const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

// Local helper function
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);

  return !cartItem
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
};

// Local helper function
const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
};

// Local helper function
const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)]
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return addToCart(state, action.payload);

    case 'remove':
      return removeFromCart(state, action.payload);

    case 'remove_all':
      return removeAllFromCart(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer