import axios from 'axios'

export default {
  callThePokemon: ({ commit }, id) => {

    console.log('I make the call here')
    axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + id).then(response => commit('update_pokemon', response.data))
  }
}