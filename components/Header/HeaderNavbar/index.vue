<template>
    <nav id="header-ul">
        <div class="user-detail">
            <a><img alt="user-photo" src="~/static/download (1).png" /></a>
            <p>MSoheil</p>
        </div>
        <ul>
            <li>فیلم ها</li>
            <li>نمایش ها</li>
            <li>جدید و معروف</li>
            <li>
                <a><img src="~/static/download.png" alt="company-logo" /></a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Header_Navbar extends Vue {
    @Prop() CompanyLogoPath!: string;
    @Prop() UserImagePath!: string;

}
</script>

<style>
.user-detail {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.user-detail a img {
    border-radius: 50%;
    margin-right: 10px;
    width: 50px;
}

#header-ul {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0 35px;
}

#header-ul li a img {
    width: 100px;
    height: 40px;
}

#header-ul li {
    margin-left: 40px;
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
}
</style>