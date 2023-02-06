<template>
    <div>
        <Header></Header>

        <Body></Body>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    layout: 'custome'
})
export default class header_index extends Vue {
    
}
</script>
