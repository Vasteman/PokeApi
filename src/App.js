import React from "react";
import { connect } from "react-redux";
import { fetchPoke,resPoke } from './components/redux/store/pokemonsReducer';
import { fetchEvo,resEvo,fetchNext } from './components/redux/store/evolutionReducer';
import {fetchAll} from './components/redux/store/allPokemonsReducer'


function App(props) {

  const {
    pokemon,
    stats,
    evolution,
    evolutionStats,
    resPoke,
    resEvo,
    fetchPoke,
    fetchEvo,
    fetchAll,
    allPoke,
    fetchNext,
    next,
    nextStat
  } = props
  
    const poke = pokemon && Object.entries(pokemon).slice(1,4)
    const stat = stats && Object.entries(stats)
    const evol = evolution && Object.entries(evolution).slice(1,4)
    const evolStat = evolutionStats && Object.entries(evolutionStats)
    const nextEvo = next && Object.entries(next).slice(1,4)
    const nextEvoStat = nextStat && Object.entries(nextStat)

console.log('nextEvo',nextEvo);
console.log('nextEvoStat',nextEvoStat);

    const reset = () => {
      resPoke();
      resEvo();
    }

    return (
      <div>
        <button onClick={fetchAll}>Set Poke-list</button>
        <button onClick={()=>reset()}>Reset Pokemon</button>
        {allPoke && <ul>{allPoke.map(el=><li key={el.id} onClick={() => fetchPoke({id: el.id})}>{el.name}</li>)}</ul>}
        <div>
          <ul>
              {poke?.map(poke=><li key={poke}>{poke[0]}: {poke[1]}</li>)}
          </ul>
            {pokemon && <img src={pokemon.imgFront} alt='pokemon front'></img>}
            {pokemon && <img src={pokemon.imgBack} alt='pokemon front'></img>}
          <ul>
            {stat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
            {stat && <button  onClick={()=>fetchEvo({id:pokemon.id})}>Get Evolution</button>}
          <ul>
            {evol?.map(evol=><li key={evol}>{evol[0]}: {evol[1]}</li>)}
          </ul>
            {evolution && <img src={evolution.imgFront} alt='pokemon front'></img>}
            {evolution && <img src={evolution.imgBack} alt='pokemon front'></img>}
          <ul>
            {evolStat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
          {evolStat && <button  onClick={()=>fetchNext({id:pokemon.id})}>Get Evolution</button>}
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
    disabledEvolButton: state.firstEvol.disabledButton,
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.firstEvol.evolution[0],
    evolutionStats: state.firstEvol.evolutionStats[0],
    allPoke: state.allPoke.allPoke[0],
    next: state.firstEvol.nextEvolution[0],
    nextStat:state.firstEvol.nextEvolutionStats[0]
  }
}

let mapDispatchToProps = {
    fetchAll,
    fetchPoke,
    fetchEvo,
    resPoke,
    resEvo,
    fetchNext
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);

 

