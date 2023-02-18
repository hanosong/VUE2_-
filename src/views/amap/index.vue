<template>
    <div class="amap-wrapper">
        <el-amap class="amap-box" :vid="'amapContainer'" :events="events"></el-amap>
</div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap"
export default {
    name: "Amap",
    data() {
        return {
            map: null,
            zoom: 18, // 初始化地图的精度大小
            // amapManager,
            events: {}
        }
    },

    mounted() {
        // 页面加载后拿到高德地图的实例 
        lazyAMapApiLoaderInstance.load().then(() => {
            // your code ...
            this.map = new AMap.Map('amapContainer', {
                center: new AMap.LngLat(112.825049, 23.286079), // 窗口位置的定位
                zoom: this.zoom,
            });
        })
    },
};
</script>
<style lang="scss">
.amap-wrapper {
    height: 100vh;
}
</style>
