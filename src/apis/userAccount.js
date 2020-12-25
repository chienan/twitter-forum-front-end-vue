
import { apiHelper } from "../utils/helpers.js"
const getToken = () => localStorage.getItem('token')

export default {
  userEdit({ userId }, formData) {
    return apiHelper.put(`users/${userId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
  }

}