import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn.vue'
import store from './../store'

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
      path: '/users/:id/edit_intro',
      name: 'users-edit-intro',
      component: () => import('../components/UserEdit.vue')
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
    {
      path: '/users/:id/followers',
      name: 'user-follower',
      component: () => import('../views/UserFollower.vue')
    },
    {
      path: '/users/:id/followings',
      name: 'user-following',
      component: () => import('../views/UserFollowing.vue')
    },

    /***** admin *****/
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
    {
      path: '/chat',
      name: 'chat-room',
      component: () => import('../views/ChatRoom.vue')

    },

    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})


router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
