import * as types from '../mutation-types'

const state = {
  count: 0
}

const getters = {
  count100(state) {
    return state.count * 100
  }
}

const actions = {

  add({ commit }, step) {
    // 触发 mutations 的 ADD
    commit('ADD', step)
  },

  minus({ commit }, step) {
    // 触发 mutations 的 MINUS
    commit('MINUS', step)
  },

}

const mutations = {

  // 等于 ADD(state, step) { ... }
  [types.ADD](state, step) {
    state.count += step
  },

  [types.MINUS](state, step) {
    if (state.count > 0) {
      state.count -= step
    }
    else {
      state.count = 0
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}