import { ADD_TO_CART } from '../constants/ActionTypes'

import initialGroceries from '../api/groceries'

// helper function to calculate inventory

const groceries = (state = initialGroceries, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state
        // NOTE subtract from inventory IF you want inventory
        // can probably just subtract from the stock - no need for inventory
      ]
    default:
      return state
  }
}

export default groceries
