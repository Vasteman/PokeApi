import {put,takeEvery,call} from 'redux-saga/effects';
import {FETCHALL,setAll} from '../store/allPokemonsReducer'
import {getRes} from './fetchPokeSaga'

async function getAllPokemon(){
  const data = await getRes('pokemon/?limit=16')
  let newData = data.results.map((name,i)=>({name: name.name, id:i+1})).filter((el,i)=> i%3 === 0);
  return newData
}

function* allPokeWorker() {
  const data = yield call(getAllPokemon)
  yield put(setAll(data))
}

export function* allPokeWatcher() {
  yield takeEvery(FETCHALL, allPokeWorker)
}