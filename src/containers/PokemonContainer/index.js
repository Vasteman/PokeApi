import { connect } from "react-redux";
import PokemonCardContainer from './PokemonContainer'
import { fetchEvolution } from '../../reducers/evolutionPokemonsReducer'
import {fetchNextEvolution} from '../../reducers/evolutionPokemonsReducer'


let mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.evolution.evolution[0],
    evolutionStats: state.evolution.evolutionStats[0],
    allPoke: state.allPokemons.allPoke[0],
    next: state.evolution.nextEvolution[0],
    nextStat: state.evolution.nextEvolutionStats[0]
  }
}

let mapDispatchToProps = {  
  fetchEvolution,
  fetchNextEvolution
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCardContainer)
