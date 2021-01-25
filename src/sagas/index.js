import {all} from 'redux-saga/effects';
import {fetchPokemonsWatcher} from './fetchPokemonSaga';
import {evolutionWatcher} from './fetchEvolutionSaga'
import {allPokeWatcher} from './fetchAllPokemonsSaga'

export function* rootWatcher(){
  yield all ([fetchPokemonsWatcher(),evolutionWatcher(),allPokeWatcher()])
}
