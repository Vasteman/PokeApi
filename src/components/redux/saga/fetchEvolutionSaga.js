import {put,takeEvery,call} from 'redux-saga/effects';
import {FETCHEVOLUTION,FETCHNEXTEVOLUTION, setEvo, setEvoStats, setNext,setNextStats} from '../store/evolutionReducer';
import {getPokemon,getPokemonStats} from './fetchPokeSaga';

function* evolutionWorker({ payload }) {
  const data = yield call(getPokemon,payload.id+1)
  const stats = yield call(getPokemonStats,payload.id+1)
  yield put(setEvo(data))
  yield put(setEvoStats(stats))
}

function* nextEvolutionWorker({ payload }) {
  const data = yield call(getPokemon,payload.id+2)
  const stats = yield call(getPokemonStats,payload.id+2)
  yield put(setNext(data))
  yield put(setNextStats(stats))
}


export function* evolutionWatcher() {
  yield takeEvery(FETCHEVOLUTION, evolutionWorker);
  yield takeEvery(FETCHNEXTEVOLUTION,nextEvolutionWorker);
}