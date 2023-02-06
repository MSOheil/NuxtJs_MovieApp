<template>
    <div class="content-description">
        <small>سریال ها</small>
        <small>+18</small>
        <small>2022 - جدید</small>
        <small>1 فصل</small>
        <h1>انفرادی</h1>
        <div class="show-content">
            <div class="sub-show">
                <div class="sub-show-detail">
                    <p>نمایش در تلویزیون و کتاب</p>
                    <p>درام</p>
                    <p>اکشن</p>
                    <p>ترسناک</p>
                </div>
                <div class="details-show">
                    <p>
                        فیلم های ایرانی با بهترین بازگیر های ایرانی بر روی پرده سینما
                        میرود فیلم انفرادی
                    </p>
                    <p id="readmore">خواندن بیشتر</p>
                </div>
            </div>
            <div class="show-icon">
                <i class="bx bx-slideshow">حالا تماشا کن</i>
            </div>
            <div class="whatch-leter">
                <p>تماشا بعدا</p>
                <i class="bx bx-shield-plus"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
export default class Header_Content extends Vue {

}
</script>

<style scoped>
.content-description {
    margin-bottom: 15%;
    text-align: center;
}

.content-description h1 {
    font-size: 160px;
    font-weight: 600;
    transition: 0.5s;
    display: block;
}

.content-description h1:hover {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
}

.content-description small {
    margin-left: 30px;
    font-weight: 600;
    font-size: 20px;
}

.show-content {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 70px;
    text-align: center;
}

.sub-show {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
}

.sub-show-detail {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.whatch-leter p {
    -webkit-transform: rotate(-90deg);
    margin-bottom: 15px;
}

.details-show p {
    font-weight: 600;
    font-size: 18px;
}

.sub-show-detail p {
    border: 1px solid #fff;
    padding: 5px;
    font-weight: 700;
    border-radius: 9px;
}

.sub-show-detail {
    margin-top: 30px;
    margin-bottom: 30px;
}

#readmore {
    opacity: 0.3;
}

.show-icon,
.whatch-leter {
    margin-top: 100%;
}

.show-content {
    margin-top: 5%;
}

.content-description {
    margin-top: 20%;
}
</style>