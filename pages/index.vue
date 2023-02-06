<template>
  <div>
    <h2> Page 1 </h2>
    <nuxt-link to="page2"> Page 2</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class pg_index extends Vue {

}
</script>
