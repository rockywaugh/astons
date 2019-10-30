const productsReducer = (state=[], action) => {
  switch(action.type) {
    case 'load':
      return action.payload;

    default:
      return state
  }
}

export default productsReducer