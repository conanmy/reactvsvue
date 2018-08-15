import * as axios from 'axios'

const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE'

const state = {
  all: []
}

// actions
const actions = {
  loadProducts({commit }) {
    axios.get('/products').then(function(response) {
      commit({
        type: PRODUCTS_RECEIVE,
        products: response.data
      })
    })
  }
}

// mutations
const mutations = {
  [PRODUCTS_RECEIVE] (state, payload) {
    state.all = payload.products
  }
}

export default {
  state,
  actions,
  mutations
}