import * as axios from 'axios'

const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE'

export function loadProducts() {
  return dispatch => {
    axios.get('/products').then(function(response) {
      dispatch({
        type: PRODUCTS_RECEIVE,
        payload: response.data
      })
    })
  }
}

// reducer
export default function(state = {
  all: []
}, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVE:
      return Object.assign({}, state, {
        all: action.payload
      })
    default:
      return state
  }
}