import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import './Views/Pokemoncards/PokemonCards';
import './Views/Pokemonlist/PokemonList';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then((res)=>{
        console.log(res.data)
      })
  }
  render(){
    return (
      <div className="App">
        <pokemoncards/>
      </div>
    );
  }
}

function Tester() {
  return (
    <div className= "Tester">
      <Tester/>
    </div>
  )
}

export default App;
 