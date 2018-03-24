import initialState from '../initialState'
import {
  CREATE_CARD_TYPE,
  UPDATE_CARD_TYPE,
  DELETE_CARD_TYPE
} from '../constants/actionTypes'

const card = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD_TYPE:
    case UPDATE_CARD_TYPE:
    case DELETE_CARD_TYPE:
    default:
      return { ...state }
  }
}

export default card
