import Vue from 'vue'
import Router from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import home from '@/views/home'
import feature from '@/views/feature'
import message from '@/views/message'
import user from '@/views/user'

import collection from '@/views/collection'
import contact from '@/views/contact'
import feedback from '@/views/feedback'
import about from '@/views/about'

import detail from '@/views/detail'
import navbar from '@/components/navbar'

Vue.use(Router)
Vue.use(MintUI)

import App from './App.vue'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false


const router = new Router({
    mode: "history",
    routes: [
        { path: '/', component: home },
        { path: '/home', component: home },
        { path: '/feature', component: feature },
        { path: '/message', component: message },
        { path: '/user', component: user },

        { path: '/user/collection', component: collection },
        { path: '/user/contact', component: contact },
        { path: '/user/feedback', component: feedback },
        { path: '/user/about', component: about },

        { path: '/jobs/detail/:id', component: detail },


        // { path: '/navbar', component: navbar },
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')