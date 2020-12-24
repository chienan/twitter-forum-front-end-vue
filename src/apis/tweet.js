import { apiHelper } from "../utils/helpers.js"
const getToken = () => localStorage.getItem('token')

export default {
  tweet: {
    get({ tweetId }) {
      return apiHelper.get(`tweets/${tweetId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  }
}
