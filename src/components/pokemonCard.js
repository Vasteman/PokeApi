import React from "react";

const PokemonCard = (props) => {
  const { pokemon, stats, requestEvolution } = props;

  const card = (
    <div>
      <ul>
        <li>Name: {pokemon?.name}</li>
        <li>Height: {pokemon?.height}</li>
        <li>Weight: {pokemon?.weight}</li>
      </ul>
      <img src={pokemon?.imgFront} alt="Pokemon front"></img>
      <img src={pokemon?.imgBack} alt="Pokemon back"></img>
      <ul>
        <li>Attack: {stats?.attack}</li>
        <li>Defense: {stats?.defense}</li>
        <li>HP: {stats?.hp}</li>
        <li>Speed: {stats?.speed}</li>
        <li>Special Attack: {stats?.specialAttack}</li>
        <li>Special Defense: {stats?.specialDefense}</li>
      </ul>
      <button onClick={() => requestEvolution({ id: pokemon.id })}>
        Get Evolution
      </button>
    </div>
  );

  return <div>{pokemon && card}</div>;
};

export default PokemonCard;
