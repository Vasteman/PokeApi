import React from "react";

const PokemonList = (props) => {
  const { allPoke, requestPokemon } = props;

  return (
    <div>
      {allPoke && (
        <ul>
          {allPoke.map((el) => (
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
