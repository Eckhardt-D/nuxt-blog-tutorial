import { authenticateUser, deauthenticateUser } from '~/controllers/auth.controller.js'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  }
}

export const actions = {
  async login({ commit }) {
    const user = await authenticateUser()
    commit('SET_USER', user)
  },
  async logout() {
    await deauthenticateUser()
    commit('SET_USER', null)
    location.href = '/'
  }
}