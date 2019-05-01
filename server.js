const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
let pokemon = []
let num = 1
let caught = true

app.get('/api/getPokemon', (req, res, next)=>{

    function getPokemon(){
        if(caught){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(resp => {
              pokemon.push(resp.data)
              if(num !== 149){
                num++
                getPokemon()
              } else {
                caught = false
                res.send(pokemon)
              }
            })
 
        }
    }
    getPokemon();
  })


app.get('/api/pokemon', (req,res,next) => {
    res.send(todos)
})

app.delete('/api/pokemon', (req,res,next) => {
    todos = todos.filter((e, i)=>{
        return Number(req.query.index) !== i
    })
    res.send(todos)
})

const port = process.env.PORT || 8061;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})