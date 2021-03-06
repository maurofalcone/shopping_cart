import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '.';

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;