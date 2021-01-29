import { connect } from "react-redux";
import Page from "./Page";
import { requestAllPokemons } from "../../reducers/allPokemonsReducer";
import { resetPokemon } from "../../reducers/pokemonsReducer";
import { resetEvolution } from "../../reducers/evolutionPokemonsReducer";
import { requestPokemon } from "../../reducers/pokemonsReducer";

let mapStateToProps = (state) => {
  return {
    allPokemons: state.allPokemons.allPoke[0],
  };
};

let mapDispatchToProps = {
  requestAllPokemons,
  resetPokemon,
  resetEvolution,
  requestPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
