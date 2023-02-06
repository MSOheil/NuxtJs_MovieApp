<template>
    <video autoplay loop muted plays-inline class="back-video">
        <source src="~/static/Enferadi_Gift.mp4" :type="VideoType" />
    </video>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class HeaderVideo extends Vue {
    @Prop() VideoPath!: string;
    @Prop() VideoType!: string;
}

</script>

<style scoped>
.back-video {
    position: absolute;
    z-index: -1;
    right: 0;
    left: 0;
    align-items: center;
    width: 100%;
}
</style>