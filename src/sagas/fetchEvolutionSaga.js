import { put, takeEvery, call } from 'redux-saga/effects';
import { getPokemon, getPokemonStats } from './fetchPokemonSaga';
import { FETCH_EVOLUTION,
         FETCH_NEXT_EVOLUTION, 
         setEvolution, 
         setEvolutionStats, 
         setNextEvolution,
         setNextEvolutionStats } from '../reducers/evolutionPokemonsReducer';

function* evolutionWorker({ payload }) {
  const data = yield call(getPokemon, payload.id+1)
  const stats = yield call(getPokemonStats, payload.id+1)
  yield put(setEvolution(data))
  yield put(setEvolutionStats(stats))
}

function* nextEvolutionWorker({ payload }) {
  const data = yield call(getPokemon, payload.id+1)
  const stats = yield call(getPokemonStats, payload.id+1)
  yield put(setNextEvolution(data))
  yield put(setNextEvolutionStats(stats))
}

export function* evolutionWatcher() {
  yield takeEvery(FETCH_EVOLUTION, evolutionWorker);
  yield takeEvery(FETCH_NEXT_EVOLUTION, nextEvolutionWorker);
}