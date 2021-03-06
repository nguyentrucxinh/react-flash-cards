import axios from 'axios'
import { FETCH_CARD_TYPE } from '../constants/actionTypes'
import { GET_CARD } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_TYPE,
  payload: {
    card
  }
})

export const getCard = (id) => dispatch => {
  axios.get(`${process.env.REACT_APP_HOST_API}${GET_CARD}/${id}`)
    .then(response => response.data.content)
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
