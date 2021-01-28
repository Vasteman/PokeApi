import { connect } from "react-redux";
import Page from './Page'
import { requestAllPokemons } from '../../reducers/allPokemonsReducer'
import { resetPokemon } from '../../reducers/pokemonsReducer'
import { resetEvolution } from '../../reducers/evolutionPokemonsReducer'
import { requestPokemon } from '../../reducers/pokemonsReducer';

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
  requestAllPokemons,
  resetPokemon,
  resetEvolution,
  requestPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)


