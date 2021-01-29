import React from "react";

const PokemonList = (props) => {
  const { allPokemons, requestPokemon } = props;

  return (
    <div>
      {allPokemons && (
        <ul className="list-group mt-3" style={{ width: "20%" }}>
          {allPokemons.map((el) => (
            <li
              className="btn list-group-item list-group-item-action pointer"
              key={el.id}
              onClick={() => requestPokemon({ id: el.id })}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
