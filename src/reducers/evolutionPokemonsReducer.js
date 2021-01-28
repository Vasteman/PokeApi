export const REQUEST_EVOLUTION = "REQUEST_EVOLUTION";
export const REQUEST_NEXT_EVOLUTION = "REQUEST_NEXT_EVOLUTION";
const REQUEST_EVOLUTION_ERROR = "REQUEST_EVOLUTION_ERROR";
const REQUEST_NEXT_EVOLUTION_ERROR = "REQUEST_NEXT_EVOLUTION_ERROR";
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
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export function evolutionReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EVOLUTION:
      return { ...state, isLoading: true, isError: false, errorMessage: "" };
    case SET_EVOLUTION:
      return {
        ...state,
        evolution: [...state.evolution, action.payload],
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
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
    case REQUEST_EVOLUTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case REQUEST_NEXT_EVOLUTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export const requestEvolution = (payload) => ({
  type: REQUEST_EVOLUTION,
  payload,
});
export const requestNextEvolution = (payload) => ({
  type: REQUEST_NEXT_EVOLUTION,
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
export const requestEvolutionError = (payload) => ({
  type: REQUEST_EVOLUTION_ERROR,
  payload,
});
export const requestNextEvolutionError = (payload) => ({
  type: REQUEST_NEXT_EVOLUTION_ERROR,
  payload,
});
