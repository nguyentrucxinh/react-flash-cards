import axios from 'axios'
import { UPDATE_CARD_TYPE } from '../constants/actionTypes'
import { HOST_API, UPDATE_CARD } from '../constants/api'

const receiveCard = card => ({
  type: UPDATE_CARD_TYPE,
  payload: {
    card
  }
})

export const updateCard = (id, data) => dispatch => {
  axios.put(`${HOST_API}${UPDATE_CARD}/${id}`, data)
    .then(response => response.data.content)
    // Not return card
    .then(card => {
      dispatch(receiveCard(card))
    })
    .catch(error => {
      throw new Error(error)
    })
}
