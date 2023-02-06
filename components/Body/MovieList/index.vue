<template>
    <section class="movie-list">
        <div class="movies">
            <div v-for="(movie, index) in Movies" :key="index" class="movie-card">
                <img :src="movie.imagePath" alt="" />
                <h1 class="movie-name">{{ movie.movieName }}</h1>
                <p>{{ movie.description }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
type Movies = {
    description: string,
    movieName: string,
    imagePath: string,
}
@Component
export default class Movie_List extends Vue {
    @Prop() Movies!: [Movies];
    constructor() {
        super();
        console.log(this.Movies);
    }
}
</script>

<style>
.movie-list {
    margin-top: 6%;
}

.movie-list p {
    color: #222;
    font-weight: 700;
}

.movie-list h3 {
    color: #222;
    font-weight: 700;
}

.movie-list h1 {
    color: #222;
    font-weight: 700;
    font-size: 35px;
}

.movie-list h2 {
    color: #222;
    font-weight: 700;
}

.movies {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3% 10%;
    flex-wrap: wrap;
}
.movies img{
    width: 190px;
}
</style>