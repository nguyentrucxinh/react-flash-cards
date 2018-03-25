import axios from 'axios'
import { FETCH_CARD_RANDOM_TYPE, TOGGLE_MESSAGE_TYPE } from '../constants/actionTypes'
import { HOST_API, GET_CARD_RAMDOM } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_RANDOM_TYPE,
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

export const getCardRandom = (id) => dispatch => {
  axios.get(`${HOST_API}${GET_CARD_RAMDOM}`)
    .then(response => response.data.content)
    .then(card => {
      if (card) {
        dispatch(receiveCard(card))
      } else {
        // Show warning
        dispatch(receiveMessage('Random card not found'))
      }
    })
    .catch(error => {
      throw new Error(error)
    })
}
