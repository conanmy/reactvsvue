<template>
  <div class="product row">
    <div class="product-list col-6">
      <ul>
        <router-link v-bind:key="product.productID" v-for="product in products" :to="'/products/' + product.productID" active-class="active">
          <li>{{product.productName}}</li>
        </router-link>
      </ul>
    </div>
    <router-view v-bind:product="getProductById(products, $route.params.productId)"></router-view>
  </div>
</template>

<script>
import * as axios from 'axios'
import { getProductById } from '../utility'

export default {
  name: 'Products',
  data: function() {
    return {
      products: []
    }
  },
  created: function() {
    let that = this
    axios.get('/products').then(function(response) {
      that.$data.products = response.data;
    })
  },
  methods: {
    getProductById
  }
}
</script>