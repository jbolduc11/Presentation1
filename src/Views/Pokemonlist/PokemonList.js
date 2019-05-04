import React, {Component} from 'react';
import './pokemonlist.css';
import PokemonCards from '../Pokemoncards/PokemonCards';
import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/'

class PokemonList extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon:[]
        }
    }

    componentDidMount(){
        const pokePromises =[];
        for(let i = 1; i<=200; i++){
            pokePromises.push(axios.get(`${baseUrl}pokemon/${i}`))
        }
        Promise.all(pokePromises)
            .then((res)=>{
                this.setState({
                    pokemon:res.map((e)=>{
                        return e.data
                    })
                })
            })
    }

    release = (id) => {
        this.setState({
            pokemon:this.state.pokemon.filter(e => e.id !== id)
        })
    }
    render(){
        const pokemonCards = this.state.pokemon.map((e)=>{
            return  <PokemonCards key={e.id} release={this.release} pokemon={e}/>
        })
        return (
            <div className="Poke_list">
               {pokemonCards}
            </div>
        )
    }
}

export default PokemonList;