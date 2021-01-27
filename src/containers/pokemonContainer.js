import { Component } from "react";
import { connect } from "react-redux";
import PokemonCard  from '../components/pokemonCard';
import {fetchEvolution} from '../reducers/evolutionPokemonsReducer'

class PokemonContainer extends Component {

  render(){
    return <PokemonCard {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.evolution.evolution[0],
    evolutionStats: state.evolution.evolutionStats[0],
    allPoke: state.allPokemons.allPoke[0],
    next: state.evolution.nextEvolution[0],
    nextStat:state.evolution.nextEvolutionStats[0]
  }
}

let mapDispatchToProps = {  
  fetchEvolution
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)
