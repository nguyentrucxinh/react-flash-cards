import axios from 'axios'
import { FETCH_USER_PROFILE } from '../constants/actionTypes'
import { HOST_API, GET_USER_PROFILE } from '../constants/api'

const receiveUserProfile = userProfile => ({
  type: FETCH_USER_PROFILE,
  payload: {
    userProfile
  }
})

export const getUserProfile = (username) => dispatch => {
  axios.get(HOST_API + GET_USER_PROFILE + username)
    .then(response => response.data.content)
    .then(userProfile => {
      dispatch(receiveUserProfile(userProfile))
    })
    .catch(error => {
      throw new Error(error)
    })
}
