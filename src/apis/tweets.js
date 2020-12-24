import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  /* 取得所有tweets */
  create({ description }) {
    return apiHelper.post('/tweets', { description }, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

}