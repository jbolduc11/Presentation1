import React from 'react';
import './pokemoncards.css';
// import Pokemonlist from '../Pokemonlist/PokemonList';
// import axios from 'axios';

const card = (props) => {
  const [firstLetter, ...arr] = props.pokemon.name.split('')
  const name = `${firstLetter.toUpperCase()}${arr.join('')}`
  return (
      <div className="pokemon-card">  
          <h4>{name}</h4>
          <div className="image" style={{backgroundImage:`url(${props.pokemon.sprites.front_default})`}}>
          </div>
          <button onClick = {()=>{props.release(props.pokemon.id)}}>Catch</button>
      </div>
  )
}

export default card
