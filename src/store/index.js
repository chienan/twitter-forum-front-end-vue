import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      localStorage.removeItem('token')
      state.isAuthenticated = false
    },
  },
  actions: {

    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
