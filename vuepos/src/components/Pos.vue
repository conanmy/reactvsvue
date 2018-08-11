<template>
  <div class="pos row">
    <div class="pos-checkout col-8">
      <p><label>Product Barcode</label><input type="text" v-model="productBarcode" v-on:keyup.enter="checkoutProduct" /></p>
      <p>Barcode examples: 6928394901243, 774471033330, 9404216045205</p>
      <div class="pos__checkout__table">
        <div class="row thead">
          <div class="col-6">Product Name</div><div class="col-2">Price</div><div class="col-2">Quantity</div><div class="col-2">Total</div>
        </div>
        <div v-bind:key="product.productID" v-for="product in products" class="row">
          <div class="col-6">{{product.productName}}</div>
          <div class="col-2">{{product.salePrice}}</div>
          <div class="col-2">{{product.quantity}}</div>
          <div class="col-2">{{getProductTotal(product)}}</div>
        </div>
      </div>
    </div>
    <pos-payment v-bind:products="products"></pos-payment>
  </div>
</template>

<script>
import * as axios from 'axios'
import PosPayment from './PosPayment'
import { getProductTotal } from '../utility'

export default {
  name: 'Pos',
  components: {
    PosPayment
  },
  data: function() {
    return {
      productBarcode: '',
      products: []
    }
  },
  methods: {
    getProductTotal,
    checkoutProduct() {
      let that = this
      axios.get('/products?productBarcode=' + that.$data.productBarcode).then(function(response) {
        let products = that.$data.products
        products.push(Object.assign({}, response.data, {quantity: 1}))
        that.$data.products = products
        that.$data.productBarcode = ''
      })
    }
  }
}
</script>