import initialState from '../initialState'
import {
  FETCH_CARDS_TYPE
} from '../constants/actionTypes'

const cards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_TYPE:
      return action.payload.cards
    default:
      return { ...state }
  }
}

export default cards
