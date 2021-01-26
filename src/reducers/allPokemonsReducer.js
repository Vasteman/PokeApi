export const FETCH_ALL_POKEMONS = 'FETCH_ALL_POKEMONS';
const SET_ALL_POKEMONS = 'SET_ALL_POKEMONS';

const initialState = {
  allPoke: []
}

export function allPokemonsReducer (state = initialState, action) {
  switch(action.type){
    case SET_ALL_POKEMONS:
      return {...state, allPoke: [...state.allPoke,action.payload]}
    default: return state;
  }
}

export const fetchAllPokemons = () => ({ type: FETCH_ALL_POKEMONS });
export const setAllPokemons = (payload) => ({ type: SET_ALL_POKEMONS, payload })