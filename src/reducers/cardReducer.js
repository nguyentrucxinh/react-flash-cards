import initialState from '../initialState'
import {
  CREATE_CARD_TYPE,
  UPDATE_CARD_TYPE,
  DELETE_CARD_TYPE,
  FETCH_CARD_TYPE,
  FETCH_CARD_NEXT_TYPE,
  FETCH_CARD_PREV_TYPE,
  FETCH_CARD_RANDOM_TYPE,
  FETCH_CARD_FIRST_TYPE
} from '../constants/actionTypes'

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARD_TYPE:
    case FETCH_CARD_NEXT_TYPE:
    case FETCH_CARD_PREV_TYPE:
    case FETCH_CARD_RANDOM_TYPE:
    case FETCH_CARD_FIRST_TYPE:
    case CREATE_CARD_TYPE:
      return action.payload.card
    case UPDATE_CARD_TYPE:
    case DELETE_CARD_TYPE:
    default:
      return state
  }
}

export default cardReducer
