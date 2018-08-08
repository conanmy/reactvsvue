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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
