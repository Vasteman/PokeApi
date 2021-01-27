import React from "react";
import { connect } from "react-redux";
import { fetchPokemon,resetPokemon } from './reducers/pokemonsReducer';
import { fetchEvolution,resetEvolution,fetchNextEvolution } from './reducers/evolutionPokemonsReducer';
import {fetchAllPokemons} from './reducers/allPokemonsReducer'


function App(props) {

  const {
    pokemon,
    stats,
    evolution,
    evolutionStats,
    resetPokemon,
    resetEvolution,
    fetchPokemon,
    fetchEvolution,
    fetchAllPokemons,
    allPoke,
    fetchNextEvolution,
    next,
    nextStat
  } = props
  
    const poke = pokemon && Object.entries(pokemon).slice(1,4)
    const stat = stats && Object.entries(stats)
    const evol = evolution && Object.entries(evolution).slice(1,4)
    const evolStat = evolutionStats && Object.entries(evolutionStats)
    const nextEvo = next && Object.entries(next).slice(1,4)
    const nextEvoStat = nextStat && Object.entries(nextStat)

    const reset = () => {
      resetPokemon();
      resetEvolution();
    }

    return (
      <div>
        <button onClick={fetchAllPokemons}>Set Poke-list</button>
        <button onClick={reset}>Reset Pokemon</button>
        {allPoke && <ul>{allPoke.map(el=><li key={el.id} onClick={() => fetchPokemon({id: el.id})}>{el.name}</li>)}</ul>}
        <div>
          <ul>
              {poke?.map(poke=><li key={poke}>{poke[0]}: {poke[1]}</li>)}
          </ul>
            {pokemon && <img src={pokemon.imgFront} alt='pokemon front'></img>}
            {pokemon && <img src={pokemon.imgBack} alt='pokemon front'></img>}
          <ul>
            {stat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
            {stat && <button  onClick={()=>fetchEvolution({id:pokemon.id})}>Get Evolution</button>}
          <ul>
            {evol?.map(evol=><li key={evol}>{evol[0]}: {evol[1]}</li>)}
          </ul>
            {evolution && <img src={evolution.imgFront} alt='pokemon front'></img>}
            {evolution && <img src={evolution.imgBack} alt='pokemon front'></img>}
          <ul>
            {evolStat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
          {evolStat && <button  onClick={()=>fetchNextEvolution({id:pokemon.id})}>Get Evolution</button>}
          <ul>
            {nextEvo?.map(evol=><li key={evol}>{evol[0]}: {evol[1]}</li>)}
          </ul>
            {next && <img src={next.imgFront} alt='pokemon front'></img>}
            {next && <img src={next.imgBack} alt='pokemon front'></img>}
          <ul>
            {nextEvoStat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
        </div>
      </div>
    ) 
}

let mapStateToProps = (state) => {
  return {
    disabledEvolButton: state.evolution.disabledButton,
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.evolution.evolution[0],
    evolutionStats: state.evolution.evolutionStats[0],
    allPoke: state.allPokemons.allPoke[0],
    next: state.evolution.nextEvolution[0],
    nextStat:state.evolution.nextEvolutionStats[0]
  }
}

let mapDispatchToProps = {
    fetchAllPokemons,
    fetchPokemon,
    fetchEvolution,
    resetPokemon,
    resetEvolution,
    fetchNextEvolution
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);

 

