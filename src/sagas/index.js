import { all, takeEvery } from "redux-saga/effects";
import { fetchPokemonsSaga } from "./fetchPokemonSaga";
import { evolutionSaga, nextEvolutionSaga } from "./fetchEvolutionSaga";
import { allPokemonsSaga } from "./fetchAllPokemonsSaga";
import { REQUEST_POKEMON } from "../reducers/pokemonsReducer";
import { REQUEST_ALL_POKEMONS } from "../reducers/allPokemonsReducer";
import {
  REQUEST_EVOLUTION,
  REQUEST_NEXT_EVOLUTION,
} from "../reducers/evolutionPokemonsReducer";

export function* rootWatcher() {
  yield all([
    takeEvery(REQUEST_POKEMON, fetchPokemonsSaga),
    yield takeEvery(REQUEST_EVOLUTION, evolutionSaga),
    yield takeEvery(REQUEST_NEXT_EVOLUTION, nextEvolutionSaga),
    takeEvery(REQUEST_ALL_POKEMONS, allPokemonsSaga),
  ]);
}
