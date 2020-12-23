import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {

  /* 取得登入使用者 */
  getCurrentUser() {
    return apiHelper.get('/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  /* 取得使用者 */
  getUsers({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getUsersTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getUsersReplied({ userId }) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getUsersLiked({ userId }) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  /* 取得追隨者排名前10使用者 */
  getTopTenUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}