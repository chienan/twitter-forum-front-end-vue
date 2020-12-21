import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  /* 取得追隨者排名前10使用者 */
  getTopTenUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}