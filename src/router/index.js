import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'
import UserProfile from '../views/UserProfile'
import UserOtherProfile from '../views/UserOtherProfile'


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
    /*********  test ***********/
    {
      path: '/users',
      name: 'user',
      component: UserProfile
    },

    /*********  test  **********/
    {
      path: '/userOther',
      name: 'userOther',
      component: UserOtherProfile
    },

    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
