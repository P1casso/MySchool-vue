import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import NutUI from "@nutui/nutui";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "@nutui/nutui/dist/style.css";

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
})


createApp(App).use(store).use(router).use(Vant).use(NutUI).use(vuetify).use(VueAxios, axios).mount('#app')


// import vuetify from './plugins/vuetify'
// import {loadFonts} from './plugins/webfontloader'
//
// import NutUI from "@nutui/nutui";
// // 采用按需加载时  此全局css样式，需要删除
// import "@nutui/nutui/dist/style.css";
//
// loadFonts()
//
// createApp(App)
//     .use(router)
//     .use(store)
//     .use(vuetify)
//     .use(NutUI)
//     .mount('#app')
