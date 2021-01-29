import produce from "immer";
import { createAction, handleActions } from "redux-actions";

export const REQUEST_POKEMON = "REQUEST_POKEMON";
const REQUEST_POKEMON_SUCCEEDED = "REQUEST_POKEMON_SUCCEEDED";
const RESET_POKEMON = "RESET_POKEMON";
const REQUEST_POKEMON_STATS = "REQUEST_POKEMON_STATS";
const REQUEST_POKEMON_ERROR = "REQUEST_POKEMON_ERROR";

export const requestPokemon = createAction(REQUEST_POKEMON);
export const requestPokemonSucceeded = createAction(REQUEST_POKEMON_SUCCEEDED);
export const requestPokemonError = createAction(REQUEST_POKEMON_ERROR);
export const resetPokemon = createAction(RESET_POKEMON);
export const requestPokemonStats = createAction(REQUEST_POKEMON_STATS);

const defaultState = {
  pokemons: [],
  stats: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const pokemonsReducer = handleActions(
  {
    [REQUEST_POKEMON]: produce((state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    }),

    [REQUEST_POKEMON_SUCCEEDED]: produce((state, { payload }) => {
      state.pokemons = [...state.pokemons, payload];
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    }),

    [RESET_POKEMON]: produce((state) => {
      state.pokemons = [];
      state.stats = [];
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    }),

    [REQUEST_POKEMON_STATS]: produce((state, { payload }) => {
      state.stats = [...state.stats, payload];
    }),

    [REQUEST_POKEMON_ERROR]: produce((state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    }),
  },
  defaultState
);
