import React from "react";
import PokemonContainer from "../../containers/PokemonContainer/index";
import PokemonList from "../../components/pokemonList";

const Page = (props) => {
  const {
    requestAllPokemons,
    resetPokemon,
    resetEvolution,
    requestPokemon,
    allPokemons,
  } = props;

  const reset = () => {
    resetPokemon();
    resetEvolution();
  };

  return (
    <div>
      <button onClick={requestAllPokemons}>Request Pokemon-list</button>
      <button onClick={reset}>Reset Pokemon</button>
      <PokemonList allPokemons={allPokemons} requestPokemon={requestPokemon} />
      <PokemonContainer />
    </div>
  );
};

export default Page;
