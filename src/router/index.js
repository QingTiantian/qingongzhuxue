import Vue from 'vue'
import Router from 'vue-router'
import part_work from '@/components/part_work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'part_work',
      component:part_work

      }
  ]
})
