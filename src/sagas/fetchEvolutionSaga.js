import { put, call } from "redux-saga/effects";
import { getPokemon, getPokemonStats } from "./fetchPokemonSaga";
import {
  setEvolution,
  setEvolutionStats,
  setNextEvolution,
  setNextEvolutionStats,
} from "../reducers/evolutionPokemonsReducer";

export function* evolutionSaga({ payload }) {
  const data = yield call(getPokemon, payload.id + 1);
  const stats = yield call(getPokemonStats, payload.id + 1);
  yield put(setEvolution(data));
  yield put(setEvolutionStats(stats));
}

export function* nextEvolutionSaga({ payload }) {
  const data = yield call(getPokemon, payload.id + 1);
  const stats = yield call(getPokemonStats, payload.id + 1);
  yield put(setNextEvolution(data));
  yield put(setNextEvolutionStats(stats));
}
