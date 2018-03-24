import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers/rootReducer'
import initialState from './initialState'

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger))

store.subscribe(() => {
  console.log(`%c Store Subscribe: ${store.getState()}`, 'background: #222; color: #bada55')
})

// Just for testing
window.store = store

export default store
