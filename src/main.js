import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 부트스트랩 사용하기
// https://www.npmjs.com/package/bootstrap-vue-3  
// https://cdmoro.github.io/bootstrap-vue-3/
// 설치 : npm i --save bootstrap bootstrap-vue-3
// 부트스트랩 아이콘 사용하기
// https://www.npmjs.com/package/@dvuckovic/vue3-bootstrap-icons
//        npm install --save @dvuckovic/vue3-bootstrap-icons
// Jquery 사용하기
// 설치 : npm install --save jquery
// 사용 : import $ from 'jquery'
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

createApp(App)
    .use(BootstrapVue3)
    .use(BootstrapIcon)
    .use(store)
    .use(router)
    .mount('#app')