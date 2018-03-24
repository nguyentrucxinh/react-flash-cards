import initialState from '../initialState'
import {
  CREATE_CARD_TYPE,
  UPDATE_CARD_TYPE,
  DELETE_CARD_TYPE,
  FETCH_CARDS_TYPE,
  FETCH_CARD_TYPE,
  FETCH_CARD_RANDOM_TYPE
} from '../constants/actionTypes'

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_TYPE:
      return action.payload.cards
    case FETCH_CARD_TYPE:
      return action.payload.card
    case FETCH_CARD_RANDOM_TYPE:
      return action.payload.card
    case CREATE_CARD_TYPE:
    case UPDATE_CARD_TYPE:
    case DELETE_CARD_TYPE:
    default:
      return { ...state }
  }
}

export default cardReducer
