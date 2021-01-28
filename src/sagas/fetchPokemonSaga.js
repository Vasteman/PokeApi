import { put, call } from "redux-saga/effects";
import { getPokemon, getPokemonStats } from "../utils/GetPokemons";
import {
  requestPokemonSucceeded,
  requestPokemonStats,
  requestPokemonError,
} from "../reducers/pokemonsReducer";

export function* fetchPokemonsSaga({ payload }) {
  try {
    const data = yield call(getPokemon, payload.id);
    const stats = yield call(getPokemonStats, payload.id);
    yield put(requestPokemonSucceeded(data));
    yield put(requestPokemonStats(stats));
  } catch (error) {
    yield put(requestPokemonError(error.message));
  }
}
