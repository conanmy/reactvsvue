import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Pos from '@/components/Pos.vue'
import { getProducts } from '@/mock'
import { getProductByBarcode, getTotal } from '@/utility'

Vue.use(Vuex)

let posStore = {
  state: {products: []},
  actions: {
    checkoutProduct({ state }, productBarcode) {
      state.products.push(
        Object.assign(getProductByBarcode(getProducts(), productBarcode), {quantity: 1})
      )
    },
    submitCheckout({ state }) {
      state.products = []
    }
  },
  getters: {
    total: (state) => {
      return getTotal(state.products)
    }
  }
}

let mockStore = new Vuex.Store({
  modules: {
    pos: posStore
  }
})

describe('Pos checkout', () => {
  it('Pos should be able to handle barcode search and checkout submit', () => {
    const posWrapper = mount(Pos, { store: mockStore })
    expect(posWrapper.findAll('.product-row').length).toBe(0)
    let inputEle = posWrapper.find('input[type="text"]')
    inputEle.trigger('focus')
    inputEle.element.value = '4665272350190'
    inputEle.trigger('change')
    inputEle.trigger('keyup.enter')
    expect(posWrapper.findAll('.product-row').length).toBe(1)
    let submitButton = posWrapper.find('.submit-button')
    submitButton.trigger('click')
    expect(posWrapper.findAll('.product-row').length).toBe(0)
  })
})
