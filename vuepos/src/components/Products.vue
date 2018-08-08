<template>
  <div class="product">
    <div class="product-list">
      <router-link :to="$route.path + ($route.params.productId ? '' : '/75')" active-class="active">Product 75</router-link>
      A list of products
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>