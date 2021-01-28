import { all, takeEvery } from "redux-saga/effects";
import { fetchPokemonsSaga } from "./fetchPokemonSaga";
import { evolutionSaga, nextEvolutionSaga } from "./fetchEvolutionSaga";
import { allPokemonsSaga } from "./fetchAllPokemonsSaga";
import { REQUEST_POKEMON } from "../reducers/pokemonsReducer";
import { REQUEST_ALL_POKEMONS } from "../reducers/allPokemonsReducer";
import {
  FETCH_EVOLUTION,
  FETCH_NEXT_EVOLUTION,
} from "../reducers/evolutionPokemonsReducer";

export function* rootWatcher() {
  yield all([
    takeEvery(REQUEST_POKEMON, fetchPokemonsSaga),
    yield takeEvery(FETCH_EVOLUTION, evolutionSaga),
    yield takeEvery(FETCH_NEXT_EVOLUTION, nextEvolutionSaga),
    takeEvery(REQUEST_ALL_POKEMONS, allPokemonsSaga),
  ]);
}
