<template>
    <div>
        <div class="movie-list-tiltle">
            <h1>فیلم ها</h1>
            <h2>سرچ برای فیلم های بیشتر</h2>
        </div>
        <BodyMovieList :Movies="movies">
        </BodyMovieList>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
interface Movies {
    description: string,
    movieName: string,
    imagePath: string,
}
@Component
export default class Body_Main extends Vue {
    movies: Movies[] = [
        {
            movieName: "گربه سیاه",
            description: "بهروز 6 یکی از فیلم های عالی در ایران",
            imagePath: require("~/static/Images/BlackCat.jpeg"),
        },
        {
            movieName: "بهروز 6",
            description: "گربه سیاه فیلم جدید در سینما",
            imagePath: require("~/static/Images/sf.png"),
        },
        {
            movieName: "سگ بنده",
            description: "فیلم سگ بند به همراه بازی فلان عالی",
            imagePath: require("~/static/Images/SBand.jpeg"),
        }
    ]
}
</script>

<style scoped>
.movie-list-tiltle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4% 10%;
}

.movie-list-tiltle p {
    color: #222;
    font-weight: 700;
}

.movie-list-tiltle h2,
h1 {
    color: #222;
    font-weight: 700;
}
</style>