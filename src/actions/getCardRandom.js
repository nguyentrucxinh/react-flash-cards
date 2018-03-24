import axios from 'axios'
import { FETCH_CARD_RANDOM_TYPE } from '../constants/actionTypes'
import { HOST_API, GET_CARD_RAMDOM } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_RANDOM_TYPE,
  payload: {
    card
  }
})

export const getCardRandom = (id) => dispatch => {
  axios.get(`${HOST_API}${GET_CARD_RAMDOM}`)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
