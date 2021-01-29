import produce from "immer";
import { createAction, handleActions } from "redux-actions";

export const REQUEST_ALL_POKEMONS = "REQUEST_ALL_POKEMONS";
const REQUEST_ALL_POKEMONS_ERROR = "REQUEST_ALL_POKEMONS_ERROR";
const REQUEST_ALL_POKEMONS_SUCCEEDED = "REQUEST_ALL_POKEMONS_SUCCEEDED";

export const requestAllPokemons = createAction(REQUEST_ALL_POKEMONS);
export const requestAllPokemonsSucceeded = createAction(
  REQUEST_ALL_POKEMONS_SUCCEEDED
);
export const requestAllPokemonsError = createAction(REQUEST_ALL_POKEMONS_ERROR);

const defaultState = {
  allPoke: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const allPokemonsReducer = handleActions(
  {
    [REQUEST_ALL_POKEMONS]: produce((state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    }),
    [REQUEST_ALL_POKEMONS_SUCCEEDED]: produce((state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.allPoke = [...state.allPoke, payload];
    }),
    [REQUEST_ALL_POKEMONS_ERROR]: produce((state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    }),
  },
  defaultState
);
