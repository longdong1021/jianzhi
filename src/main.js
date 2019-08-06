import Vue from 'vue'
import Router from 'vue-router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './vue-axios'

import home from '@/views/home'
import feature from '@/views/feature'
import message from '@/views/message'
import user from '@/views/user'

import collection from '@/views/collection'
import contact from '@/views/contact'
import feedback from '@/views/feedback'
import about from '@/views/about'

import yetapply from '@/views/yetapply'
import yetenroll from '@/views/yetenroll'
import yetfinish from '@/views/yetfinish'
import yetpost from '@/views/yetpost'

import userinfo from '@/views/userinfo'
import resume from '@/views/resume'
import detail from '@/views/detail'

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
        { path: '/feature', component: feature },
        { path: '/message', component: message },
        { path: '/user', component: user },

        { path: '/user/collection', component: collection },
        { path: '/user/contact', component: contact },
        { path: '/user/feedback', component: feedback },
        { path: '/user/about', component: about },

        { path: '/user/yetapply', component: yetapply },
        { path: '/user/yetenroll', component: yetenroll },
        { path: '/user/yetfinish', component: yetfinish },
        { path: '/user/yetpost', component: yetpost },

        { path: '/user/userinfo', component: userinfo },
        { path: '/user/resume', component: resume },
        { path: '/jobs/detail/:id', component: detail },


    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')