import { TOGGLE_MESSAGE_TYPE } from '../constants/actionTypes'

const receiveMessage = message => ({
  type: TOGGLE_MESSAGE_TYPE,
  payload: {
    message
  }
})

export const toggleMessage = (message) => dispatch => {
  dispatch(receiveMessage(message))
}
