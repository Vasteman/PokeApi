import {all} from 'redux-saga/effects';
import {fetchPokemonsWatcher} from './fetchPokeSaga';
import {evolutionWatcher} from './fetchEvolutionSaga'
import {allPokeWatcher} from './fetchAllPokemonSaga'

export function* rootWatcher(){
  yield all ([fetchPokemonsWatcher(),evolutionWatcher(),allPokeWatcher()])
}