import axios from 'axios'
import { CREATE_CARD_TYPE } from '../constants/actionTypes'
import { HOST_API, CREATE_CARD } from '../constants/api'

const receiveCards = card => ({
  type: CREATE_CARD_TYPE,
  payload: {
    card
  }
})

export const createCard = (data) => dispatch => {
  axios.post(`${HOST_API}${CREATE_CARD}`, data)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCards(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}