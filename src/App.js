import React from "react";
import { connect } from "react-redux";
import { requestPokemon, resetPokemon } from './reducers/pokemonsReducer';
import { resetEvolution, fetchNextEvolution } from './reducers/evolutionPokemonsReducer';
import { requestAllPokemons } from './reducers/allPokemonsReducer'
import PokemonContainer from "./containers/PokemonContainer/index";

function App(props) {

  const {
    allPokemonsError,
    resetPokemon,
    resetEvolution,
    requestPokemon,
    requestAllPokemons,
    allPoke,
  } = props
  
  const reset = () => {
    resetPokemon();
    resetEvolution();
  }

  return (
      <div>
        <button onClick={requestAllPokemons}>Set Poke-list</button>
        <button onClick={reset}>Reset Pokemon</button>
        {allPokemonsError && <div>{allPokemonsError}</div>}
        {allPoke && <ul>{allPoke.map(el=><li key={el.id} onClick={() => requestPokemon({id: el.id})}>{el.name}</li>)}</ul>}
        <PokemonContainer />
      </div>
    ) 
}

  let mapStateToProps = (state) => {
    return {
      disabledEvolButton: state.evolution.disabledButton,
      pokemon: state.pokemon.pokemons[0],
      stats: state.pokemon.stats[0],
      evolution: state.evolution.evolution[0],
      evolutionStats: state.evolution.evolutionStats[0],
      allPoke: state.allPokemons.allPoke[0],
      allPokemonsError: state.allPokemons.errorMessage,
      next: state.evolution.nextEvolution[0],
      nextStat:state.evolution.nextEvolutionStats[0]
    }
  }

  let mapDispatchToProps = {
      requestAllPokemons,
      requestPokemon,
      resetPokemon,
      resetEvolution,
      fetchNextEvolution
    }

export default connect(mapStateToProps,mapDispatchToProps)(App);

 

