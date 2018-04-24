import axios from 'axios'
import { FETCH_CARD_PREV_TYPE, TOGGLE_MESSAGE_TYPE } from '../constants/actionTypes'
import { GET_CARD_PREV } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_PREV_TYPE,
  payload: {
    card
  }
})

const receiveMessage = message => ({
  type: TOGGLE_MESSAGE_TYPE,
  payload: {
    message
  }
})

export const getCardPrev = (id) => dispatch => {
  axios.get(`${process.env.REACT_APP_HOST_API}${GET_CARD_PREV}/${id}`)
    .then(response => response.data.content)
    .then(card => {
      if (card) {
        dispatch(receiveCard(card))
      } else {
        // Show warning
        dispatch(receiveMessage('This is the last card'))
      }
    })
    .catch(error => {
      throw new Error(error)
    })
}
