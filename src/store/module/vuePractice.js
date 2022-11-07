let vuePractice=JSON.parse(localStorage.getItem('vuePractice'))||{}
let vuePracticeList=JSON.parse(localStorage.getItem('vuePracticeList'))||[]
let vuePracticeNum=JSON.parse(localStorage.getItem('vuePracticeNum'))
let state={
    vuePractice,
    vuePracticeList,
    num:vuePracticeNum||0
}
let actions={
    getVuePractice({commit,state},val){
        return state.vuePractice
    },

}
let mutations={
    clean(state,val){
        state.vuePractice={}
        state.vuePracticeList=[]
        state.num=0
        localStorage.setItem('vuePractice',JSON.stringify(''))
        localStorage.setItem('vuePracticeList',JSON.stringify(''))
        localStorage.setItem('vuePracticeNum',JSON.stringify(''))
    },
    setVuePractice:(state,val)=>{
        val&&state.vuePractice.push(val)
        localStorage.setItem('vuePractice',JSON.stringify(state.vuePractice))

    } ,
    setVuePracticeList(state,val){
         val&&state.vuePracticeList.push(val)
         localStorage.setItem('vuePracticeList',JSON.stringify(state.vuePracticeList))
        mutations.setNum(state)
    },
    setNum(state,val){
        state.num++
        localStorage.setItem('vuePracticeNum',JSON.stringify(state.num))
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}