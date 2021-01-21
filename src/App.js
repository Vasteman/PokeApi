import React from "react";
import { connect } from "react-redux";
import { fetchPoke,resPoke } from './components/redux/store/pokemonsReducer';
import { fetchEvo,resEvo } from './components/redux/store/evolutionReducer';

export let id = 0;
export function randomId (){
  let rand = Math.floor(Math.random()*100)
  id = (rand*3)-2
  return id
}

function App(props) {

  const {
    disabledPokeButton,
    disabledEvolButton,
    pokemon,
    stats,
    evolution,
    evolutionStats,
    resPoke,
    resEvo,
    fetchPoke,
    fetchEvo
  } = props
  
    const stat = stats && Object.entries(stats)
    const evolStat = evolutionStats && Object.entries(evolutionStats)
    const poke = pokemon && Object.entries(pokemon).slice(1,4)
    const evol = evolution && Object.entries(evolution).slice(1,4)

    const reset = () => {
      resPoke();
      resEvo();
    }

    return (
      <div>
        <button disabled={disabledPokeButton} onClick={fetchPoke}>Set Pokemon</button>
        <button onClick={()=>reset()}>Reset Pokemon</button>
        <div>
          <ul>
              {poke?.map(poke=><li key={poke}>{poke[0]}: {poke[1]}</li>)}
          </ul>
            {pokemon && <img src={pokemon.imgFront} alt='pokemon front'></img>}
            {pokemon && <img src={pokemon.imgBack} alt='pokemon front'></img>}
          <ul>
            {stat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
            {stat && <button disabled={disabledEvolButton} onClick={fetchEvo}>Get Evolution</button>}
          <ul>
            {evol?.map(evol=><li key={evol}>{evol[0]}: {evol[1]}</li>)}
          </ul>
            {evolution && <img src={evolution.imgFront} alt='pokemon front'></img>}
            {evolution && <img src={evolution.imgBack} alt='pokemon front'></img>}
          <ul>
            {evolStat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
          </ul>
        </div>
      </div>
    ) 
}

let mapStateToProps = (state) => {
  return {
    disabledPokeButton: state.pokemon.disabledButton,
    disabledEvolButton: state.firstEvol.disabledButton,
    pokemon: state.pokemon.pokemons[0],
    stats: state.pokemon.stats[0],
    evolution: state.firstEvol.evolution[0],
    evolutionStats: state.firstEvol.evolutionStats[0]
  }
}

let mapDispatchToProps = {
    fetchPoke,
    fetchEvo,
    resPoke,
    resEvo
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);

 

