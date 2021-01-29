import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { pokemonsReducer } from "./pokemonsReducer";
import { rootWatcher } from "../sagas/index";
import { evolutionReducer } from "./evolutionPokemonsReducer";
import { allPokemonsReducer } from "./allPokemonsReducer";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  pokemon: pokemonsReducer,
  evolution: evolutionReducer,
  allPokemons: allPokemonsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
