export const REQUEST_ALL_POKEMONS = "REQUEST_ALL_POKEMONS";
const REQUEST_ALL_POKEMONS_ERROR = "REQUEST_ALL_POKEMONS_ERROR";
const REQUEST_ALL_POKEMONS_SUCCEEDED = "REQUEST_ALL_POKEMONS_SUCCEEDED";

const initialState = {
  allPoke: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export function allPokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_POKEMONS:
      return { ...state, isLoading: true, isError: false, errorMessage: "" };
    case REQUEST_ALL_POKEMONS_SUCCEEDED:
      return {
        ...state,
        allPoke: [...state.allPoke, action.payload],
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case REQUEST_ALL_POKEMONS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export const requestAllPokemons = () => ({ type: REQUEST_ALL_POKEMONS });
export const requestAllPokemonsSucceeded = (payload) => ({
  type: REQUEST_ALL_POKEMONS_SUCCEEDED,
  payload,
});
export const requestAllPokemonsError = (payload) => ({
  type: REQUEST_ALL_POKEMONS_ERROR,
  payload,
});
