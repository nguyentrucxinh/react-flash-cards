import axios from 'axios'
import { FETCH_CARD } from '../constants/actionTypes'
import { HOST_API, GET_CARD } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD,
  payload: {
    card
  }
})

export const getCard = (id) => dispatch => {
  axios.get(`${HOST_API}${GET_CARD}/${id}`)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
