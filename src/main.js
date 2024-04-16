import Vue from 'vue'
import Router from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './vue-axios'

import home from '@/views/home'

Vue.use(Router)
Vue.use(MintUI)

import App from './App.vue'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'
// import './assets/css/mint-reset.scss' //全局修改mint-UI样式
Vue.config.productionTip = false


const router = new Router({
    mode: "history",
    routes: [
        { path: '/', component: home },
        { path: '/home', component: home },


    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')