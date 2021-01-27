import { all, takeEvery } from 'redux-saga/effects';
import { fetchPokemonsSaga } from './fetchPokemonSaga';
import { evolutionWatcher } from './fetchEvolutionSaga'
import { allPokemonsSaga } from './fetchAllPokemonsSaga'
import { REQUEST_POKEMON } from '../reducers/pokemonsReducer'
import { REQUEST_ALL_POKEMONS } from '../reducers/allPokemonsReducer'

export function* rootWatcher(){
  yield all ([
    takeEvery(REQUEST_POKEMON, fetchPokemonsSaga),
    evolutionWatcher(),
    takeEvery(REQUEST_ALL_POKEMONS, allPokemonsSaga)
  ])
};

