export default {
  callPokemonFromAppLogic: ({ dispatch }, id) => {
    dispatch('callThePokemon', id, {root:true});
  },
};