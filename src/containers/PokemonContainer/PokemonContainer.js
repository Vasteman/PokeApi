import React from 'react';
import PokemonCard from '../../components/pokemonCard'

const PokemonCardContainer = (props) => {

  const { 
    pokemon, 
    stats, 
    evolution, 
    fetchEvolution,
    evolutionStats,
    fetchNextEvolution,
    next,
    nextStat
  } = props 

    return (
    <div>
      <div>{pokemon && <PokemonCard stats={stats} pokemon={pokemon} fetchEvolution={fetchEvolution}/>}</div>
      <div>{evolution && <PokemonCard stats={evolutionStats} pokemon={evolution} fetchEvolution={fetchNextEvolution}/>}</div>
      <div>{next && <PokemonCard stats={nextStat} pokemon={next}/>}</div>
    </div>
    )
};

export default PokemonCardContainer;