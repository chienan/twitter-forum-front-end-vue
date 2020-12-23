import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn.vue'
import UserFollower from '../views/UserFollower'
import UserFollowing from '../views/UserFollowing'
// import UserProfileLiked from '../views/UserProfileLiked'




Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',

  routes: [
    /**   SignIn, SignUp   **/
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
    /****  tweets  ****/
    {
      path: '/tweets',
      name: 'tweets',
      component: () => import('../views/Tweets')
    },

    {
      path: '/tweet/:id',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')

    },
    /****  users  ****/

    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/UserProfile.vue')
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      //動態載入
      component: () => import('../views/UserProfileEdit.vue')
    },
    {
      path: '/users/:id/replied_tweets',
      name: 'users-replied-tweets',
      component: () => import('../views/UserProfileReplied.vue')
    },
    {
      path: '/users/:id/likes',
      name: 'users-likes',
      component: () => import('../views/UserProfileLiked.vue')
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
    // {
    //   path: '/userOther',
    //   name: 'user-other',
    //   component: UserOtherProfile
    // },
    // {
    //   path: '/userOther/replied',
    //   name: 'user-other-replied',
    //   component: UserOtherReplied
    // },
    // {
    //   path: '/userOther/liked',
    //   name: 'user-other-liked',
    //   component: UserOtherLiked
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

export default router