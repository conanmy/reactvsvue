<template>
  <div class="product-detail col-6">
    <h3>Product detail</h3>
    <p>${{product.salePrice}}</p>
    <p>{{product.productName}}</p>
    <p>{{product.productDesc}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: Object
  }
}
</script>