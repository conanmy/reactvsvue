<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="menu">
      <router-link exact to="/" active-class="active">Pos</router-link>
      <router-link to="/products" active-class="active">Products</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  width: 1000px;
  margin: 0 auto;
  padding: 0;
  font-family: sans-serif;
}
.menu {
  height: 30px;
  line-height: 30px;
  background: burlywood;
}
.menu a {
  padding: 0 20px;
}
.menu a:active {
  text-decoration: none;
}
.menu a.active {
  color: white;
}
@import './assets/styles/flexboxgrid'
</style>
