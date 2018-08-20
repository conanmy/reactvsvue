<template>
  <div class="pos-payment col-4">
    <p>Total: {{total}}</p>
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
    <p><span class="submit-button button" v-on:click="onSubmit">Submit</span></p>
  </div>
</template>

<script>
import { getTotal } from '../utility'

export default {
  name: 'PosPayment',
  props: {
    total: Number
  },
  data: function() {
    return {
      paymentMethod: 'eftpos'
    }
  },
  methods: {
    getTotal,
    onSubmit() {
      this.$emit('submit', this.$data.paymentMethod)
    }
  }
}
</script>