<template>
  <div>
    <h2> Page 2 </h2>
    <nuxt-link to="/"> Page 1</nuxt-link>


    <JokesAmerican v-if="JokesType === 'American'" />
    <JokesPersian v-else />


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class pg_page2 extends Vue {

  JokesType: string = 'Persian'; //American

}
</script>
