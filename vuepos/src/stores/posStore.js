import * as axios from 'axios'
import { getTotal } from '../utility'

const POS_CHECKOUT_PRODUCT = 'POS_CHECKOUT_PRODUCT'
const POS_CLEAR_PRODUCTS = 'POS_CLEAR_PRODUCTS'

const state = {
  products: []
}

// getters
const getters = {
  total: (state) => {
    return getTotal(state.products)
  }
}

// actions
const actions = {
  checkoutProduct({ commit }, productBarcode) {
    axios.get('/products?productBarcode=' + productBarcode).then(function(response) {
      commit({
        type: POS_CHECKOUT_PRODUCT,
        product: response.data
      })
    })
  },
  submitCheckout({ state, getters, commit }, paymentMethod) {
    axios.post('/bill', {
      paymentMethod: paymentMethod,
      products: state.products,
      priceTotal: getters.total
    }).then(function() {
      commit({
        type: POS_CLEAR_PRODUCTS
      })
    })
  }
}

// mutations
const mutations = {
  [POS_CHECKOUT_PRODUCT] (state, payload) {
    state.products.push(Object.assign(payload.product, {quantity: 1}))
  },

  [POS_CLEAR_PRODUCTS] (state) {
    state.products = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}