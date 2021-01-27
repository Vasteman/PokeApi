export const REQUEST_ALL_POKEMONS = 'FETCH_ALL_POKEMONS';
const REQUEST_ALL_POKEMONS_ERROR = 'REQUEST_ALL_POKEMONS_ERROR';
const REQUEST_ALL_POKEMONS_SUCCEEDED = 'SET_ALL_POKEMONS_SUCCEEDED';

const initialState = {
  allPoke: [],
  loading: false,
  error: false,
  errorMessage: ''
}

export function allPokemonsReducer (state = initialState, action) {
  switch(action.type){
    case REQUEST_ALL_POKEMONS:
      return {...state, loading: true, error: false}
    case REQUEST_ALL_POKEMONS_SUCCEEDED:
      return {...state, allPoke: [...state.allPoke, action.payload]}
    case REQUEST_ALL_POKEMONS_ERROR:
      return {...state, 
        loading: false,
        error: true, 
        errorMessage: action.payload }
    default: return state;
  }
}

export const requestAllPokemons = () => ({ type: REQUEST_ALL_POKEMONS });
export const requestAllPokemonsSucceeded = (payload) => ({ type: REQUEST_ALL_POKEMONS_SUCCEEDED, payload })
export const requestAllPokemonsError = (payload) => ({ type: REQUEST_ALL_POKEMONS_ERROR, payload })