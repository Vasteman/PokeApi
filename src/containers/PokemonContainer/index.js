import { connect } from "react-redux";
import PokemonCardContainer from "./PokemonContainer";
import { requestEvolution } from "../../reducers/evolutionPokemonsReducer";
import { requestNextEvolution } from "../../reducers/evolutionPokemonsReducer";

let mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.evolution.evolution[0],
    evolutionStats: state.evolution.evolutionStats[0],
    nextEvolution: state.evolution.nextEvolution[0],
    nextEvolutionStats: state.evolution.nextEvolutionStats[0],
  };
};

let mapDispatchToProps = {
  requestEvolution,
  requestNextEvolution,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCardContainer);
