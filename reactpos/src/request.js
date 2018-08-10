import * as axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'
import { getProducts } from './mock'

let mock = new MockAdapter(axios);

mock.onGet('/products').reply(200, getProducts())

let products = getProducts()
products.map(function(product) {
  mock.onGet('/products?productBarcode=' + product.productBarCode).reply(200, product);
  return null;
})

mock.onPost('/bill').reply(200, {})