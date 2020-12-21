import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  /* 取得所有tweets */
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

}