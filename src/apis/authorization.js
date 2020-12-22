
import { apiHelper } from "../utils/helpers.js"

export default {
  authorization: {
    AdminSignIn({ email, password }) {
      return apiHelper.post('signin', { email, password })

    },
    signIn({ email, password }) {
      return apiHelper.post('signin', { email, password })

    }
  }

}