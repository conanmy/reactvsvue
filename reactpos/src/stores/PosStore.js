import * as axios from 'axios'
import { getTotal } from '../utility'

const POS_CHECKOUT_PRODUCT = 'POS_CHECKOUT_PRODUCT'
const POS_CLEAR_PRODUCTS = 'POS_CLEAR_PRODUCTS'

export function checkoutProduct(productBarcode) {
  return dispatch => {
    axios.get('/products?productBarcode=' + productBarcode).then(function(response) {
      dispatch({
        type: POS_CHECKOUT_PRODUCT,
        payload: response.data
      })
    })
  }
}

export function submitCheckout(paymentMethod) {
  return (dispatch, getState) => {
    let { pos } = getState()
    axios.post('/bill', {
      paymentMethod: paymentMethod,
      products: pos.products,
      priceTotal: pos.total
    }).then(function() {
      dispatch({
        type: POS_CLEAR_PRODUCTS
      })
    })
  }
}

// reducer
export default function(state = {
  products: [],
  total: 0
}, action) {
  switch (action.type) {
    case POS_CHECKOUT_PRODUCT:
      let products = state.products
      products.push(Object.assign({}, action.payload, {quantity: 1}))
      return Object.assign({}, state, {
        products: products, total: getTotal(products)
      })
    case POS_CLEAR_PRODUCTS:
      return Object.assign({}, state, {
        products: [], total: 0
      })
    default:
      return state
  }
}