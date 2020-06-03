import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index.vue'
import List from '@/components/List/List.vue'
Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
