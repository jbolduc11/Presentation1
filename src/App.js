import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import card from './Views/Pokemoncards/PokemonCards';
import './Views/Pokemonlist/PokemonList';

class App extends Component {
  componentDidMount(){
    axios.get('/api/getPokemon')
      .then((res)=>{
        console.log(res.data)
      })
  }
  render(){
    return (
      <div className="App">
        <card/>
      </div>
    );
  }
}


export default App;
 