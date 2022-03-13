import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import './index.css'

import Example from './views/Example.vue'
import DesignEdit from './views/DesignEdit.vue'
import Campaigns from './views/Campaigns.vue'
import Settings from './views/Settings.vue'
import Mails from './views/Mail.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Campaigns },
  { path: '/example', name: 'Example', component: Example },
  { path: '/new', name: 'DesignEdit', component: DesignEdit },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/mails', name: 'Mails', component: Mails },
  { path: '/dashboard/edit/:designId', component: DesignEdit },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

new Vue({
  router
}).$mount('#app')
