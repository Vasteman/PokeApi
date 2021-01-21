import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsAction,resetPokemonsDataAction } from './components/redux/store/pokemonsReducer';
import {fetchEvolutionAction,resetPokemonsEvolutionAction} from './components/redux/store/evolutionReducer';

export let id = 0;

export function randomId (){
  let rand = Math.floor(Math.random()*100)
  id = (rand*3)-2
  return id
}



function App() {

    const dispatch = useDispatch();
    const pokemon = useSelector(state=>state.pokemon.pokemons[0])
    const stats = useSelector(state=>state.pokemon.stats[0])
    const disabled = useSelector(state=>state.pokemon.disabledButton)
    const disabledEvolButton = useSelector(state=>state.firstEvol.disabledButton)
    const evolution = useSelector(state=>state.firstEvol.evolution[0])
    const evolutionStats = useSelector(state=>state.firstEvol.evolutionStats[0])

    const stat = stats && Object.entries(stats)
    const evolStat = evolutionStats && Object.entries(evolutionStats)
    const poke = pokemon && Object.entries(pokemon).slice(1,4)
    const evol = evolution && Object.entries(evolution).slice(1,4)

    const reset = () => {
      dispatch(resetPokemonsDataAction());
      dispatch(resetPokemonsEvolutionAction())
    }

    return (
      <div>
        <button disabled={disabled} onClick={()=>dispatch(fetchPokemonsAction())}>SetPokemon</button>
        <button onClick={()=>reset()}>Reset Pokemon</button>
      <div>
        {poke?.map(poke=><li key={poke}>{poke[0]}: {poke[1]}</li>)}
        {pokemon && <img src={pokemon.imgFront} alt='pokemon front'></img>}
        {pokemon && <img src={pokemon.imgBack} alt='pokemon front'></img>}
      <ul>
        {stat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
        {stat && <button disabled={disabledEvolButton} onClick={()=>dispatch(fetchEvolutionAction())}>Get Evolution</button>}
        {evol?.map(evol=><li key={evol}>{evol[0]}: {evol[1]}</li>)}
        {evolution && <img src={evolution.imgFront} alt='pokemon front'></img>}
        {evolution && <img src={evolution.imgBack} alt='pokemon front'></img>}
        {evolStat?.map(stat=><li key={stat}>{stat[0]}: {stat[1]}</li>)}
      </ul>
      </div>
      </div>
    ) 
}
export default App;