<template>
    <div>
        <!--    汽车渲染 -->
        <Cars />
        <!-- 地图 -->
        <aMap />
        <!-- 选择车辆--底部导航栏 -->

        <!-- 会员 -->
        <!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
        <div id="children-view" :class="{ open: show }">
            <router-view />
        </div>

    </div>
</template>
<script>
import aMap from "../amap/index.vue";
import Cars from "../cars/index.vue";
import Navbar from "@c/navbar";
export default {
    name: "Index",
    components: { aMap, Cars },
    data() {
        return {
            // show: false,
        };
    },
    computed: {
        // 刷新监听路由的变化
        show() {
            const router = this.$route;
            console.log(router);
            return !(router.name === "Index")
        }
    },
    watch: {
        // 监听路由
        // "$route": {
        //     handler(newValue) {
        //         const routerName = newValue.name;
        //         this.show = !(routerName === "Index")
        //         console.log(newValue)
        //     }
        // }
    }
};
</script>
<style lang="scss">
#children-view {
    position: fixed;
    top: 0;
    right: -600px; // 刚进入页面的时候不展示侧边栏
    bottom: 0;
    width: 410px;
    background-color: #34393f;
    z-index: 101;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;

    &.open {
        right: 0;
    }
}
</style>
