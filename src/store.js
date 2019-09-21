import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    load:false
  },
  mutations: {
    loading(state){
      state.load = !state.load;
    }

  },
  actions: {

  }
})
