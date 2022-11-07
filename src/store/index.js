import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
 import VuePractice from './module/vuePractice'
let store =new Vuex.Store({
    modules:{
        VuePractice
    },
    getters
})

export default store