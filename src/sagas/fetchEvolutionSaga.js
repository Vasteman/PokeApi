import { put, call } from "redux-saga/effects";
import { getPokemon, getPokemonStats } from "./fetchPokemonSaga";
import {
  setEvolution,
  setEvolutionStats,
  setNextEvolution,
  setNextEvolutionStats,
  requestEvolutionError,
  requestNextEvolutionError,
} from "../reducers/evolutionPokemonsReducer";

export function* evolutionSaga({ payload }) {
  try {
    const data = yield call(getPokemon, payload.id + 1);
    const stats = yield call(getPokemonStats, payload.id + 1);
    yield put(setEvolution(data));
    yield put(setEvolutionStats(stats));
  } catch (error) {
    yield put(requestEvolutionError(error.message));
  }
}

export function* nextEvolutionSaga({ payload }) {
  try {
    const data = yield call(getPokemon, payload.id + 1);
    const stats = yield call(getPokemonStats, payload.id + 1);
    yield put(setNextEvolution(data));
    yield put(setNextEvolutionStats(stats));
  } catch (error) {
    yield put(requestNextEvolutionError(error.message));
  }
}
