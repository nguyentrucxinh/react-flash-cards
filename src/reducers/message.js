import initialState from '../initialState'
import {
  TOGGLE_MESSAGE_TYPE
} from '../constants/actionTypes'

const message = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MESSAGE_TYPE:
      return action.payload.message
    default:
      return { ...state }
  }
}

export default message
