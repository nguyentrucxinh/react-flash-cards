import { combineReducers } from 'redux'
import cardsReducer from './cardsReducer'
import cardReducer from './cardReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: cardReducer,
  message: messageReducer
})

export default rootReducer
