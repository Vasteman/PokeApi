import {put,takeEvery,call} from 'redux-saga/effects';
import {setPokemon, setPokemonStats, FETCH_POKEMON} from '../reducers/pokemonsReducer';

export const _apiBase = 'https://pokeapi.co/api/v2/'

export async function getRes (url) {
  const res = await fetch(`${_apiBase}${url}`);
  if(!res.ok){
    throw new Error(`could not fetch ${url}`)
  }
  return await res.json();
}

export async function getPokemon (id) {
  const data = await getRes(`pokemon/${id}/`)
  const newData = transformPokemon(data)
  return newData;
}

export async function getPokemonStats (id) {
  const stats = await getRes(`pokemon/${id}/`)
  const newStats = transformPokemonStats(stats)
  return newStats
}

const transformPokemon = (data) => {
  return{
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    imgFront: data.sprites.front_default,
    imgBack: data.sprites.back_default
  }
}

const transformPokemonStats = (data) => {
  return{
    id: data.id,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat
  }
}

function* fetchPokemonsWorker({ payload }) {
  const data = yield call(getPokemon, payload.id)
  const stats = yield call(getPokemonStats,payload.id)
  yield put(setPokemon(data))
  yield put(setPokemonStats(stats))
}

export function* fetchPokemonsWatcher() {
  yield takeEvery(FETCH_POKEMON, fetchPokemonsWorker)
}