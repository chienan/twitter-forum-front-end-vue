import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'

import UserProfile from '../views/UserProfile'
import UserFollower from '../views/UserFollower'
import UserFollowing from '../views/UserFollowing'
import UserProfileReplied from '../views/UserProfileReplied'
import UserProfileLiked from '../views/UserProfileLiked'
import UserOtherProfile from '../views/UserOtherProfile'
import UserOtherReplied from '../views/UserOtherReplied'
import UserOtherLiked from '../views/UserOtherLiked'



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
    {
      path: '/users/replied',
      name: 'user-replied',
      component: UserProfileReplied
    },
    {
      path: '/users/liked',
      name: 'user-liked',
      component: UserProfileLiked

    },


    /*********  test  **********/
    {
      path: '/users/follower',
      name: 'user-follower',
      component: UserFollower
    },
    /*********  test ***********/
    {
      path: '/users/following',
      name: 'user-following',
      component: UserFollowing
    },
    /*********  test  **********/
    {
      path: '/userOther',
      name: 'user-other',
      component: UserOtherProfile
    },
    {
      path: '/userOther/replied',
      name: 'user-other-replied',
      component: UserOtherReplied
    },
    {
      path: '/userOther/liked',
      name: 'user-other-liked',
      component: UserOtherLiked
    },



    {

      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')

    },
    {

      path: '/users/:id/edit',
      name: 'users-edit',
      //動態載入
      component: () => import('../views/UserProfileEdit.vue')

      path: '/users/follower',
      name: 'user-follower',
      component: UserFollower

    },
    {

      path: '/admin',
      name: 'admin-signIn',
      component: () => import('../views/AdminSignIn.vue')

      path: '/users/following',
      name: 'user-following',
      component: UserFollowing
    },

    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
