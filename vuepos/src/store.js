import Vue from 'vue'
import Vuex from 'vuex'
import posStore from './stores/posStore'
import productsStore from './stores/productsStore'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    pos: posStore,
    products: productsStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})