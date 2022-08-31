import Vue from 'vue'
import Vuex from 'vuex'
import { findAllIndex } from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: {},
    localData: {
      dataArticle: [
        {
          title: '识段一每基解号',
          date: '1971-02-09'
        },
        {
          title: '说各情身空',
          date: '2008-11-10'
        },
        {
          title: '响口方团',
          date: '2018-09-21'
        },
        {
          title: '工则两五',
          date: '1974-12-07'
        },
        {
          title: '且是表与制该',
          date: '1997-05-25'
        }
      ],
      dataMsg: [
        {
          name: '参分体水构算油',
          avatar: 'http://dummyimage.com/120x60',
          content: '连到下社具华看采众规做统式斯战科。',
          date: '1974-12-27'
        },
        {
          name: '装存提周石',
          avatar: 'http://dummyimage.com/234x60',
          content: '式装团值取快往采约此目且离属。',
          date: '2005-07-05'
        },
        {
          name: '政专道将专',
          avatar: 'http://dummyimage.com/300x600',
          content: '万门片加题前相了候易便节专。',
          date: '1975-05-02'
        },
        {
          name: '军特花',
          avatar: 'http://dummyimage.com/240x400',
          content: '向细素工生何文党军种参型那则京何。',
          date: '2015-05-03'
        },
        {
          name: '管划号结易养',
          avatar: 'http://dummyimage.com/468x60',
          content: '打值争眼取劳整分太权住情效。',
          date: '1972-07-10'
        }
      ],
      success: true
    }
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
