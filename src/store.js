import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// import reducer from './reducer';
import cardReducer from './reducers/cardReducer';

export const store = createStore(
  cardReducer, applyMiddleware(thunk));
