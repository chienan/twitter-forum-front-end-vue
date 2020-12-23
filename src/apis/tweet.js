import { apiHelper } from "../utils/helpers.js"
const getToken = () => localStorage.getItem('token')

export default {
  tweet: {
    get({ tweetUserId }) {
      return apiHelper.get(`tweets/${tweetUserId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  }
}
