import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
//import PokemonCards from './Views/Pokemoncards/PokemonCards';
import './Views/Pokemonlist/PokemonList';
import PokemonList from './Views/Pokemonlist/PokemonList';

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
        <PokemonList/>
      </div>
    );
  }
}


export default App;
 