import axios from 'axios'
import { FETCH_CARDS } from '../constants/actionTypes'
import { HOST_API, GET_CARDS } from '../constants/api'

const receiveCards = cards => ({
  type: FETCH_CARDS,
  payload: {
    cards
  }
})

export const getCards = () => dispatch => {
  axios.get(`${HOST_API}${GET_CARDS}`)
    .then(response => response.data.content)
    .then(cards => {
      dispatch(receiveCards(cards))
    })
    .catch(error => {
      throw new Error(error)
    })
}
