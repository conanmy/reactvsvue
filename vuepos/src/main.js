import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

import Pos from './components/Pos.vue'
import Products from './components/Products.vue'
import ProductDetail from './components/ProductDetail.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Pos },
    {
      path: '/products', component: Products, children: [
        { path: '/products/:productId', component: ProductDetail }
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
