import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {pokemonsReducer} from './pokemonsReducer'
import { rootWatcher } from '../saga/index';
import {evolutionReducer} from './evolutionReducer'

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
 pokemon: pokemonsReducer,
 firstEvol: evolutionReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))); 

sagaMiddleware.run(rootWatcher)