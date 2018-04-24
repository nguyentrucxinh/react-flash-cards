import axios from 'axios'
import { DELETE_CARD_TYPE } from '../constants/actionTypes'
import { DELETE_CARD } from '../constants/api'

const receiveCard = card => ({
  type: DELETE_CARD_TYPE,
  payload: {
    card
  }
})

export const deleteCard = (id) => dispatch =>
  axios.delete(`${process.env.REACT_APP_HOST_API}${DELETE_CARD}/${id}`)
    .then(response => response.data.content)
    .then(card => dispatch(receiveCard(card)))
    .catch(error => {
      throw new Error(error)
    })
