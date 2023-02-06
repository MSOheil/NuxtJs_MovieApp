<template>
    <header id="home-header">
        <HeaderHeaderVideo VideoPath="~/static/Enferadi_Gift.mp4" VideoType="video/mp4"></HeaderHeaderVideo>
        <HeaderHeaderNavbar CompanyLogoPath="~/static/download.png" UserImagePath="~/static/download (1).png">
        </HeaderHeaderNavbar>
        <HeaderHeaderContent></HeaderHeaderContent>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Home_Header extends Vue {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #fff;
}

#home-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    margin-top: 30px;
    position: relative;
    background: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
    width: 100%;
    height: 100vh;
}
</style>