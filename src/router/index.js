import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'
import SignIn from '../views/SignIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      //動態載入，當使用者進到'/signup'時才載入這個元件
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/',
      name: 'root',
      redirect: '/signin',

    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    {
      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')

    },
    {
      path: '/admin',
      name: 'admin-signIn',
      component: () => import('../views/AdminSignIn.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
