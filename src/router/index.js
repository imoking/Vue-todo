import Vue from 'vue'
import Router from 'vue-router'

import todos from '@/components/pages/todos'
import about from '@/components/pages/about'
import consept from '@/components/pages/consept'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: todos
    },
    {
      path: '/2',
      component: about
    },
    {
      path: '/3',
      component: consept
    }
  ]
})
