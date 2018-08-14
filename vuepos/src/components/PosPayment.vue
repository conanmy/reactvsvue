<template>
  <div class="pos-payment col-4">
    <p>Total: {{getTotal(products)}}</p>
    <p>Payment method</p>
    <p>
      <input id="payment-method-eftpos" name="payment-method" type="radio"
        value="eftpos" v-model="paymentMethod" />
      <label htmlFor="payment-method-eftpos">Eftpos</label>
    </p>
    <p>
      <input id="payment-method-cash" name="payment-method" type="radio"
        value="cash" v-model="paymentMethod" />
      <label htmlFor="payment-method-cash">Cash</label>
    </p>
    <p><span class="button" v-on:click="onSubmit">Submit</span></p>
  </div>
</template>

<script>
import * as axios from 'axios'
import { getTotal } from '../utility'

export default {
  name: 'PosPayment',
  props: {
    products: Array
  },
  data: function() {
    return {
      paymentMethod: 'eftpos'
    }
  },
  methods: {
    getTotal,
    onSubmit() {
      let that = this
      axios.post('/bill', {
        paymentMethod: that.$data.paymentMethod,
        products: that.products,
        priceTotal: getTotal(that.products)
      }).then(function() {
        that.$emit('submit-success')
      })
    }
  }
}
</script>