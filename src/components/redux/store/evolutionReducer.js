export const FETCHEVOLUTION = 'FETCH_EVOLUTION';
const SETEVOLUTION = 'SET_EVOLUTION';
const SETEVOLSTATS = 'SET_EVOLSTATS';
const RESETEVOLUTION = 'RESET_EVOLUTION';
export const FETCHNEXTEVOLUTION = 'FETCH_NEXT_EVOLUTION';
const SETNEXTEVOLUTION = 'SET_NEXT_EVOLUTION';
const SETNEXTEVOLUTIONSTATS = 'SET_NEXT_EVOLUTION_STATS';

const initialState = {
  evolution: [],
  evolutionStats: [],
  nextEvolution:[],
  nextEvolutionStats: []
}

export function evolutionReducer (state = initialState, action) {
  switch(action.type){
    case SETEVOLUTION:
      return {...state, evolution: [...state.evolution, action.payload]}
    case RESETEVOLUTION:
      return {...state, evolution: [], evolutionStats: [], nextEvolution: [], nextEvolutionStats: []}
    case SETEVOLSTATS:
      return {...state, evolutionStats: [...state.evolutionStats, action.payload]}
    case SETNEXTEVOLUTION:
      return{...state, nextEvolution: [...state.nextEvolution, action.payload]}
    case SETNEXTEVOLUTIONSTATS:
      return{...state, nextEvolutionStats: [...state.nextEvolutionStats, action.payload]}
    default: return state;
  }
}

export const setEvo = (payload) => ({type: SETEVOLUTION, payload});
export const resEvo = () => ({type: RESETEVOLUTION});
export const setEvoStats = (payload) => ({type: SETEVOLSTATS, payload});
export const fetchEvo = (payload) => ({type:FETCHEVOLUTION, payload });
export const fetchNext = (payload) => ({type: FETCHNEXTEVOLUTION, payload});
export const setNext = (payload) => ({type: SETNEXTEVOLUTION, payload});
export const setNextStats = (payload) => ({type: SETNEXTEVOLUTIONSTATS, payload});
