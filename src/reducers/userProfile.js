import initialState from '../initialState'
import { FETCH_USER_PROFILE } from '../constants/actionTypes'

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return action.payload.userProfile
    default:
      return { ...state }
  }
}

export default userProfile
