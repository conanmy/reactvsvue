<template>
  <div class="pos row">
    <div class="pos-checkout col-8">
      <p><label>Product Barcode</label><input type="text" v-model="productBarcode" v-on:keyup.enter="checkoutProduct" /></p>
      <p>Barcode examples: 6928394901243, 774471033330, 9404216045205</p>
      <div class="pos__checkout__table">
        <div class="row thead">
          <div class="col-6">Product Name</div><div class="col-2">Price</div><div class="col-2">Quantity</div><div class="col-2">Total</div>
        </div>
        <div v-bind:key="product.productID" v-for="product in products" class="product-row row">
          <div class="col-6">{{product.productName}}</div>
          <div class="col-2">{{product.salePrice}}</div>
          <div class="col-2">{{product.quantity}}</div>
          <div class="col-2">{{getProductTotal(product)}}</div>
        </div>
      </div>
    </div>
    <pos-payment v-bind:total="total" v-on:submit="submitCheckout"></pos-payment>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PosPayment from './PosPayment'
import { getProductTotal } from '../utility'

export default {
  name: 'Pos',
  components: {
    PosPayment
  },
  data: function() {
    return {
      productBarcode: ''
    }
  },
  computed: {
    ...mapState({
      products: state => state.pos.products
    }),
    ...mapGetters([
      'total'
    ])
  },
  methods: {
    getProductTotal,
    checkoutProduct() {
      this.$store.dispatch('checkoutProduct', this.$data.productBarcode)
      this.$data.productBarcode = ''
    },
    ...mapActions([
      'submitCheckout'
    ])
  }
}
</script>