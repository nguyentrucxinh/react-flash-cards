import axios from 'axios'
import { FETCH_CARD_NEXT_TYPE, TOGGLE_MESSAGE_TYPE } from '../constants/actionTypes'
import { GET_CARD_NEXT } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_NEXT_TYPE,
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

export const getCardNext = (id) => dispatch => {
  axios.get(`${process.env.REACT_APP_HOST_API}${GET_CARD_NEXT}/${id}`)
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
