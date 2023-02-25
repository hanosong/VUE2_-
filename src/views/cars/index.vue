<template>
    <div class="index-wrapper">
        <div class="cars-swiper-wrapper">
            <swiper class="swiper" :options="swiperOption" @slideChange="onSlideChange" ref="mySwiper">
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>


            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>

    </div>
</template>
<script>
import CarsItem from '@c/carsList'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: "Cars",
    components: {
        CarsItem, Swiper, SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        };
    }
};
</script>
<style lang="scss">
@import './index.scss';
</style>
