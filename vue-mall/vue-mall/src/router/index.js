import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
