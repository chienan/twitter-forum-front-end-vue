import { apiHelper } from "../utils/helpers.js"

export default {
  create({ data1 }) {
    return apiHelper.post('users', data1)

  }
}


