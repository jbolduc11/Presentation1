import React, {Component} from 'react';
import '.Views/Pokemoncards/pokemoncards.css';
import Pokemonlist from './src/Views/Pokemonlist/PokemonList';
import axios from 'axios';

export default (props) => {
  const [firstLetter, ...arr] = props.pokemon.name.split('')
  const name = `${firstLetter.toUpperCase()}${arr.join('')}`
  return (
      <div className="pokemon-card">  
          <h4>{name}</h4>
          <div className="image" style={{backgroundImage:`url(${props.pokemon.sprites.front_default})`}}>
          </div>
          <button onClick = {()=>{props.release(props.pokemon.id)}}>Release</button>
      </div>
  )
}

