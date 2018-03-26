import axios from 'axios'
import { CREATE_CARD_TYPE } from '../constants/actionTypes'
import { CREATE_CARD } from '../constants/api'

const receiveCard = card => ({
  type: CREATE_CARD_TYPE,
  payload: {
    card
  }
})

export const createCard = (data) => dispatch => {
  axios.post(`${process.env.REACT_APP_HOST_API}${CREATE_CARD}`, data)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
