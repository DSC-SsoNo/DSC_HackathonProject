import { createWrapper } from 'next-redux-wrapper';

import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import reducer from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const middlewares = [thunk]; // 미들웨어들을 넣으면 된다.
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares)
    );
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;