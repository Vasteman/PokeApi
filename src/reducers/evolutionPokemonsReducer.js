export const FETCH_EVOLUTION = "FETCH_EVOLUTION";
export const FETCH_NEXT_EVOLUTION = "FETCH_NEXT_EVOLUTION";
const SET_EVOLUTION = "SET_EVOLUTION";
const SET_EVOLUTION_STATS = "SET_EVOLUTION_STATS";
const RESET_EVOLUTION = "RESET_EVOLUTION";
const SET_NEXT_EVOLUTION = "SET_NEXT_EVOLUTION";
const SET_NEXT_EVOLUTION_STATS = "SET_NEXT_EVOLUTION_STATS";

const initialState = {
  evolution: [],
  evolutionStats: [],
  nextEvolution: [],
  nextEvolutionStats: [],
};

export function evolutionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EVOLUTION:
      return { ...state, evolution: [...state.evolution, action.payload] };
    case RESET_EVOLUTION:
      return {
        ...state,
        evolution: [],
        evolutionStats: [],
        nextEvolution: [],
        nextEvolutionStats: [],
      };
    case SET_EVOLUTION_STATS:
      return {
        ...state,
        evolutionStats: [...state.evolutionStats, action.payload],
      };
    case SET_NEXT_EVOLUTION:
      return {
        ...state,
        nextEvolution: [...state.nextEvolution, action.payload],
      };
    case SET_NEXT_EVOLUTION_STATS:
      return {
        ...state,
        nextEvolutionStats: [...state.nextEvolutionStats, action.payload],
      };
    default:
      return state;
  }
}

export const fetchEvolution = (payload) => ({ type: FETCH_EVOLUTION, payload });
export const fetchNextEvolution = (payload) => ({
  type: FETCH_NEXT_EVOLUTION,
  payload,
});
export const setEvolution = (payload) => ({ type: SET_EVOLUTION, payload });
export const resetEvolution = () => ({ type: RESET_EVOLUTION });
export const setEvolutionStats = (payload) => ({
  type: SET_EVOLUTION_STATS,
  payload,
});
export const setNextEvolution = (payload) => ({
  type: SET_NEXT_EVOLUTION,
  payload,
});
export const setNextEvolutionStats = (payload) => ({
  type: SET_NEXT_EVOLUTION_STATS,
  payload,
});
