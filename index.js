import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router/index'

let app=createApp(App);
    app.use(router)
    .mount("#app");
