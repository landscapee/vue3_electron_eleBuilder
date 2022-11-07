<template>
    <div >

        <router-view></router-view>
    </div>
</template>
<script>
 export default {
    name: "App",
    components:{

    },
    data() {
        return {}
    },

    methods: {},

}
</script>
<style lang="scss">
@import "../src/styles/index";

</style>
<style lang="scss" scoped>
#app{
    width: 100%;
    height: 100vh;
    //box-sizing: border-box;
}
</style>
