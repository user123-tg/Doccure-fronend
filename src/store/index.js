import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/root';
import { applyMiddleware } from 'redux';

const store = configureStore(
  {
    reducer
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
