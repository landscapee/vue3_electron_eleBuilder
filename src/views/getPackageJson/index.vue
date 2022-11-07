<template>
<div @click="getJson">getJson</div>
<div class="text" ref="text"></div>
</template>
<script>

export default {
    name: "index",
    data() {
        return {}
    },
    methods: {
        getJson(){
            let ref=require('ref')
            let path =require('path')
            ref.readFile(path.resolve(__dirname,'../../../static/package.json'),(e,d)=>{
                console.log(e, d);
            })
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
.text{
    width: 100%;
    height: 100%;
    min-height: 50px;
    border: 1px #ffae00 solid;
}
</style>
