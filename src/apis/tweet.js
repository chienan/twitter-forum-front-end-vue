import { apiHelper } from "../utils/helpers.js"
const getToken = () => localStorage.getItem('token')

export default {
  tweet: {
    get({ tweetId }) {
      return apiHelper.get(`tweets/${tweetId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    getReplies({ tweetId }) {
      return apiHelper.get(`tweets/${tweetId}/replies`, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    post({ tweetId, data1 }) {
      return apiHelper.post(`tweets/${tweetId}/replies`, data1, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  }
}



