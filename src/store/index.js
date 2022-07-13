import Vue from 'vue'
import Vuex from 'vuex'
import { findAllIndex } from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: {}
  },
  getters: {},
  mutations: {
    setList(state, data) {
      state.list = data
    }
  },
  actions: {
    async getList({ commit }) {
      const { data } = await findAllIndex()
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', data)
    }
  },
  modules: {}
})
