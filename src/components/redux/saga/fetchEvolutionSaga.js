import {put,takeEvery,call} from 'redux-saga/effects';
import {FETCHEVOLUTION, setEvo, setEvoStats} from '../store/evolutionReducer';
import {getPokemon,getPokemonStats} from './fetchPokeSaga';
import {id} from '../../../App'

function firstEvoId(id){
  return id+1
}

function* evolutionWorker() {
  const evoId = yield call(firstEvoId,id)
  const data = yield call(getPokemon,evoId)
  const stats = yield call(getPokemonStats,evoId)
  yield put(setEvo(data))
  yield put(setEvoStats(stats))
}

export function* evolutionWatcher() {
  yield takeEvery(FETCHEVOLUTION, evolutionWorker)
}