import { apiHelper } from "../utils/helpers.js"
const getToken1 = () => localStorage.getItem('token1')

export default {
  adminTweets: {
    get() {
      return apiHelper.get('admin/tweets', { headers: { Authorization: `Bearer ${getToken1()}` } })
    },
    delete({ admintweetId }) {
      return apiHelper.delete(`admin/tweets/${admintweetId}`, { headers: { Authorization: `Bearer ${getToken1()}` } })
    }

  },
  getUsers() {
    return apiHelper.get('admin/users', { headers: { Authorization: `Bearer ${getToken1()}` } })
  }

}