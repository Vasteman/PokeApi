import React from "react";

const PokemonCard = (props) => {
  const { pokemon, stats, requestEvolution } = props;

  const card = (
    <div className="jumbotron" style={{ width: "25%" }}>
      <ul className="list-group">
        <li className="list-group-item list-group-item-action active">
          Name :{" "}
          <span style={{ textTransform: "uppercase" }}>{pokemon?.name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Height : {pokemon?.height}
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Weight : {pokemon?.weight}
        </li>
      </ul>
      <img src={pokemon?.imgFront} alt="Pokemon front"></img>
      <img className="pl-5" src={pokemon?.imgBack} alt="Pokemon back"></img>
      <ul>
        <li className="text-danger">Attack : {stats?.attack}</li>
        <li className="text-muted">Defense : {stats?.defense}</li>
        <li className="text-success">HP : {stats?.hp}</li>
        <li className="text-info">Speed : {stats?.speed}</li>
        <li className="text-warning">
          Special Attack : {stats?.specialAttack}
        </li>
        <li className="text-primary">
          Special Defense : {stats?.specialDefense}
        </li>
      </ul>
      {requestEvolution && (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => requestEvolution({ id: pokemon.id })}
        >
          Get Evolution
        </button>
      )}
    </div>
  );

  return <div>{pokemon && card}</div>;
};

export default PokemonCard;
