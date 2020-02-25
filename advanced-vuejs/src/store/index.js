import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    test
  }
})
