import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Tweets from '../views/Tweets'
import UserProfile from '../views/UserProfile'
import UserOtherProfile from '../views/UserOtherProfile'
import UserFollower from '../views/UserFollower'
import UserFollowing from '../views/UserFollowing'
import UserProfileReplied from '../views/UserProfileReplied'
import UserProfileLiked from '../views/UserProfileLiked'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'root',
    //   redirect: '/tweets'
    // },
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
      path: '/follower',
      name: 'follower',
      component: UserFollower
    },
    /*********  test ***********/
    {
      path: '/following',
      name: 'following',
      component: UserFollowing
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
