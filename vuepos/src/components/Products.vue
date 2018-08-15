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
import { mapState } from 'vuex'
import { getProductById } from '../utility'

export default {
  name: 'Products',
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('loadProducts')
  },
  methods: {
    getProductById
  }
}
</script>