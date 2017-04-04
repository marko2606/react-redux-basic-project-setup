import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {reducerOne} from '../reducers/reducerOne';
import {displayConsoleMsg} from '../actions/reducerOneAction';

// add multiple reducers in combineReducers method
export const store = createStore(combineReducers({reducerOne}), {}, applyMiddleware(logger));

store.dispatch(displayConsoleMsg());