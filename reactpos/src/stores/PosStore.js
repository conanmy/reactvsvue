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

export function deepFreeze(obj) {
  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function(name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop === 'object' && prop !== null)
      deepFreeze(prop);
  });

  // Freeze self (no-op if already frozen)
  return Object.freeze(obj);
}

// reducer
export default function(state = {
  products: [],
  total: 0
}, action) {
  switch (action.type) {
    case POS_CHECKOUT_PRODUCT:
      let products = [...state.products, Object.assign({}, action.payload, {quantity: 1})]
      return deepFreeze(Object.assign({}, state, {
        products: products, total: getTotal(products)
      }))
    case POS_CLEAR_PRODUCTS:
      return Object.assign({}, state, {
        products: [], total: 0
      })
    default:
      return state
  }
}