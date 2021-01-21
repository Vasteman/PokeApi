import {all} from 'redux-saga/effects';
import {fetchPokemonsWatcher} from './fetchPokeSaga';
import {evolutionWatcher} from './fetchEvolutionSaga'

export function* rootWatcher(){
  yield all ([fetchPokemonsWatcher(),evolutionWatcher()])
}