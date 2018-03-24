import initialState from '../initialState'
import {
  FETCH_CARDS_TYPE,
  FETCH_CARD_TYPE,
  FETCH_CARD_RANDOM_TYPE
} from '../constants/actionTypes'

const card = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_TYPE:
      return action.payload.cards
    case FETCH_CARD_TYPE:
      return action.payload.card
    case FETCH_CARD_RANDOM_TYPE:
      return { card: action.payload.card, ...state }
    default:
      return { ...state }
  }
}

export default card
