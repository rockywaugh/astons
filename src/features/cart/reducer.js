const cartReducer = (state=[], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'remove':
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }
}

export default cartReducer