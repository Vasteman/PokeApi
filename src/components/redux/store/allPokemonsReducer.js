export const FETCHALL = 'FETCH_ALL';
const SETALL = 'SET_ALL';

const initialState = {
  allPoke: []
}

export function allPokemonsReducer (state = initialState, action) {
  switch(action.type){
    case SETALL:
      return {...state, allPoke:[...state.allPoke,action.payload]}
    default: return state;
  }
}

export const fetchAll = () => ({ type: FETCHALL });
export const setAll = (payload) => ({ type: SETALL, payload })