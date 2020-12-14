import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/tweets'
    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
