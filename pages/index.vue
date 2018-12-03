<template>
    <div>
        <h1>Example Nuxt + vuex module </h1>
        <p>{{ pokemon.name }}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'mainApp',
  computed: {
    ...mapGetters({
        bidule: 'bidule',
        pokemon: 'getPokemon'
    })
  },
  mounted() {
    console.log('bidule', this.bidule)
    this.callPokemonFromAppLogic('1')
  },
  methods: {
    ...mapActions({
      callPokemonFromAppLogic: 'callPokemonFromAppLogic'
    }),
  }
}
</script>
