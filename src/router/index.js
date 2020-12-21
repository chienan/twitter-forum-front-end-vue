import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'
import SignIn from '../views/SignIn.vue'
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
      redirect: '/signin'
    },
    {
      path: '/setaccount',
      name: 'set-account',
      component: () => import('../views/SetAccount')

    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    /*********  test ***********/
    {
      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')

    },
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
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      //動態載入
      component: () => import('../views/UserProfileEdit.vue')
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


    // {
    //   path: '/users/follower',
    //   name: 'user-follower',
    //   component: UserFollower

    // },
    {

      path: '/admin',
      name: 'admin-signIn',
      component: () => import('../views/AdminSignIn.vue')
    },
    {
      path: '/admin/tweets',
      name: 'admin-tweets',
      component: () => import('../views/AdminTweets.vue')
    },
    {
      path: '/admin/userList',
      name: 'admin-userList',
      component: () => import('../views/AdminUserList.vue')
    },
    // {
    //   path: '/users/following',
    //   name: 'user-following',
    //   component: UserFollowing
    // },

    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
