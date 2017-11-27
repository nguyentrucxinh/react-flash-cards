import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// import reducer from './reducer';
import card from './reducers/card';

export const store = createStore(
  card, applyMiddleware(thunk));
