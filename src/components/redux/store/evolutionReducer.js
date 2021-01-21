export const FETCHEVOLUTION = 'FETCH_EVOLUTION';
const SETEVOLUTION = 'SET_EVOLUTION';
const SETEVOLSTATS = 'SET_EVOLSTATS';
const RESETEVOLUTION = 'RESET_EVOLUTION';

const initialState = {
  evolution: [],
  evolutionStats: [],
  disabledEvolButton: false
}

export function evolutionReducer (state = initialState, action) {
  switch(action.type){
    case SETEVOLUTION:
      return {...state, evolution: [...state.evolution, action.payload], disabledButton: true }
    case RESETEVOLUTION:
      return {...state, evolution: [], evolutionStats: [], disabledButton: false}
    case SETEVOLSTATS:
      return {...state, evolutionStats: [...state.evolutionStats, action.payload]}
    default: return state;
  }
}

export const setEvo = (payload) => ({type: SETEVOLUTION, payload});
export const resEvo = () => ({type: RESETEVOLUTION});
export const setEvoStats = (payload) => ({type: SETEVOLSTATS, payload});
export const fetchEvo = () => ({type:FETCHEVOLUTION});


