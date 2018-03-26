import axios from 'axios'
import { FETCH_CARDS_TYPE } from '../constants/actionTypes'
import { GET_CARDS } from '../constants/api'

const receiveCards = cards => ({
  type: FETCH_CARDS_TYPE,
  payload: {
    cards
  }
})

export const getCards = () => dispatch => {
  axios.get(`${process.env.REACT_APP_HOST_API}${GET_CARDS}`)
    .then(response => response.data.content)
    .then(cards => {
      dispatch(receiveCards(cards))
    })
    .catch(error => {
      throw new Error(error)
    })
}
