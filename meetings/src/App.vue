<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue.js DevMeetings</h1>
    
    <input type="text" placeholder="Search product by name..." 
        v-if="products" 
        v-model="search" 
        @keyup="searchProducts($event.target.value)"/>
    <button v-show="search.length" @click.prevent="clearSearch">x</button>

    <product-list :products="products"></product-list>

    <button type="button" @click="loadMore()">Load more</button>

    <h2>Add new product</h2>
    <form @submit.prevent="addNewProduct">
      <input v-validate="'required'" v-model="newProduct.Name" name="productName" placeholder="Product name">
      <div class="error">
        {{ errors.first('productName') }}
      </div>
      <button type="submit">Add new</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  data() {
    return {
      search: '',
      page: 1,
      newProduct: {
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsStore/products'
    })
  },
  methods: {
    ...mapActions({
      getProducts: 'productsStore/getProducts',
      searchProducts: 'productsStore/searchProducts'
    }),
    addNewProduct() {
      this.$validator.validate().then(result => {
        if (result) {
          const id = Math.floor(Math.random())
          this.products.push({
            id: id,
            ...this.newProduct
          })
          this.newProduct.Name = ''
          this.$validator.reset() 
        }
      });
    },
    removeProduct(id) {
      this.products.forEach((product, index) => {
        if (product.id === id) {
          this.products.splice(index, 1);
        }
      })
    },
    clearSearch() {
      this.search = ''
      this.getProducts()
    }
  },
  created() {
    this.getProducts()
  },
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.error {
  color: red;
}
</style>
