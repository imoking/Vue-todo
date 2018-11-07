import Vue from 'vue'
import Router from 'vue-router'

import page1 from '@/components/pages/page1'
import page2 from '@/components/pages/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: page1
    },
    {
      path: '/2',
      component: page2
    }
  ]
})
