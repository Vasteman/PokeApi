import React from "react";

const PokemonList = (props) => {
  const { allPokemons, requestPokemon } = props;

  return (
    <div>
      {allPokemons && (
        <ul>
          {allPokemons.map((el) => (
            <li key={el.id} onClick={() => requestPokemon({ id: el.id })}>
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
