import { combineReducers } from 'redux'
import cards from './cards'
import card from './card'
import message from './message'

const rootReducer = combineReducers({
  cards,
  card,
  message
})

export default rootReducer
