import VuePractice from "./module/vuePractice";

let obj={
    getVuePractice:(state)=>state.VuePractice.vuePractice||{},
    getVuePracticeList:(state)=>state.VuePractice.vuePracticeList||[],
    getNum:(state)=>state.VuePractice.num,
}
export default obj