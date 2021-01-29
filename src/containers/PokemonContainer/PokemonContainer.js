import React from "react";
import PokemonCard from "../../components/pokemonCard";

const PokemonCardContainer = (props) => {
  const {
    pokemon,
    stats,
    evolution,
    evolutionStats,
    nextEvolution,
    nextEvolutionStats,
    requestEvolution,
    requestNextEvolution,
  } = props;

  return (
    <div>
      <div>
        {pokemon && (
          <PokemonCard
            stats={stats}
            pokemon={pokemon}
            requestEvolution={requestEvolution}
          />
        )}
      </div>
      <div>
        {evolution && (
          <PokemonCard
            stats={evolutionStats}
            pokemon={evolution}
            requestEvolution={requestNextEvolution}
          />
        )}
      </div>
      <div>
        {nextEvolution && (
          <PokemonCard stats={nextEvolutionStats} pokemon={nextEvolution} />
        )}
      </div>
    </div>
  );
};

export default PokemonCardContainer;
