import axios from 'axios'
import { DELETE_CARD_TYPE } from '../constants/actionTypes'
import { HOST_API, DELETE_CARD } from '../constants/api'

const receiveCards = card => ({
  type: DELETE_CARD_TYPE,
  payload: {
    card
  }
})

export const deleteCard = (id) => dispatch => {
  axios.delete(`${HOST_API}${DELETE_CARD}/${id}`)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCards(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
