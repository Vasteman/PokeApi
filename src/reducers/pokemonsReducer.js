export const REQUEST_POKEMON = "REQUEST_POKEMON";
const REQUEST_POKEMON_SUCCEEDED = "REQUEST_POKEMON_SUCCEEDED";
const RESET_POKEMON = "RESET_POKEMON";
const REQUEST_POKEMON_STATS = "REQUEST_POKEMON_STATS";
const REQUEST_POKEMON_ERROR = "REQUEST_POKEMON_ERROR";

const initialState = {
  pokemons: [],
  stats: [],
  loading: false,
  error: false,
  errorMessage: "",
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON:
      return { ...state, loading: true, error: false };
    case REQUEST_POKEMON_SUCCEEDED:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        loading: false,
        error: false,
      };
    case RESET_POKEMON:
      return {
        ...state,
        pokemons: [],
        stats: [],
        loading: false,
        error: false,
        errorMessage: "",
      };
    case REQUEST_POKEMON_STATS:
      return { ...state, stats: [...state.stats, action.payload] };
    case REQUEST_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const requestPokemonSucceeded = (payload) => ({
  type: REQUEST_POKEMON_SUCCEEDED,
  payload,
});
export const resetPokemon = () => ({ type: RESET_POKEMON });
export const requestPokemonStats = (payload) => ({
  type: REQUEST_POKEMON_STATS,
  payload,
});
export const requestPokemon = (payload) => ({ type: REQUEST_POKEMON, payload });
export const requestPokemonError = (payload) => ({
  type: REQUEST_POKEMON_ERROR,
  payload,
});
