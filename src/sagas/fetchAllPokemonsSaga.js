import { put, call } from "redux-saga/effects";
import {
  requestAllPokemonsSucceeded,
  requestAllPokemonsError,
} from "../reducers/allPokemonsReducer";
import { getRes } from "../utils/GetPokemons";

async function getAllPokemon() {
  const data = await getRes("pokemon/?limit=16");
  let newData = data.results
    .map((name, i) => ({ name: name.name, id: i + 1 }))
    .filter((el, i) => i % 3 === 0);
  return newData;
}

export function* allPokemonsSaga() {
  try {
    const data = yield call(getAllPokemon);
    yield put(requestAllPokemonsSucceeded(data));
  } catch (error) {
    yield put(requestAllPokemonsError(error.message));
  }
}
