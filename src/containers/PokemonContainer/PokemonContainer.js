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
    fetchEvolution,
    fetchNextEvolution,
  } = props;

  return (
    <div>
      <div>
        {pokemon && (
          <PokemonCard
            stats={stats}
            pokemon={pokemon}
            fetchEvolution={fetchEvolution}
          />
        )}
      </div>
      <div>
        {evolution && (
          <PokemonCard
            stats={evolutionStats}
            pokemon={evolution}
            fetchEvolution={fetchNextEvolution}
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
