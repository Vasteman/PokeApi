export const FETCH_POKEMON = 'FETCH_POKEMON';
const SET_POKEMON = 'SET_POKEMON';
const RESET_POKEMON = 'RESET_POKEMON';
const SET_STATS = 'SET_STATS';


const initialState = {
  pokemons: [],
  stats: [],
}

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_POKEMON:
      return {...state, pokemons: [...state.pokemons, action.payload]}
    case RESET_POKEMON:
      return {...state, pokemons: [], stats: []}
    case SET_STATS:
      return {...state, stats: [...state.stats, action.payload]}
    default: return state;
  }
}

export const setPokemon = (payload) => ({type: SET_POKEMON, payload});
export const resetPokemon = () => ({type: RESET_POKEMON});
export const setPokemonStats = (payload) => ({type: SET_STATS, payload});
export const fetchPokemon = (payload) => ({type:FETCH_POKEMON, payload});


