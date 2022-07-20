import {applyMiddleware, compose, createStore} from 'redux';
import rootReduser from './redusers';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'

const initialState = {}

const composeFunc = process.env.NODE_ENV  === 'development' ? composeWithDevTools : compose

const composeEnhancers = composeFunc(applyMiddleware(thunk))

const store = createStore(rootReduser(), initialState, composeEnhancers) ;

export default store;

