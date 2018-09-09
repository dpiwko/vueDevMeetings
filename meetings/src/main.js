import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import productsStore from './store/products'

Vue.use(Vuex)
Vue.use(VeeValidate)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productsStore
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
