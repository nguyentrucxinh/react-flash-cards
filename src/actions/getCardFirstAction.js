import axios from 'axios'
import { FETCH_CARD_FIRST_TYPE } from '../constants/actionTypes'
import { GET_CARD_FIRST } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_FIRST_TYPE,
  payload: {
    card
  }
})

export const getCardFirst = () => dispatch => {
  axios.get(`${process.env.REACT_APP_HOST_API}${GET_CARD_FIRST}`)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
