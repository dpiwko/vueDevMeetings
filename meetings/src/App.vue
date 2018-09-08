<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue.js DevMeetings</h1>

    <product-list :products="products" @remove="removeProduct(...arguments)"></product-list>

    <h2>Add new product</h2>
    <form @submit.prevent="addNewProduct">
      <input v-validate="'required'" v-model="newProduct.name" name="productName" placeholder="Product name">
      <div class="error">
        {{ errors.first('productName') }}
      </div>
      <button type="submit">Add new</button>
    </form>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'product1'
        },
        {
          id: 2,
          name: 'product2'
        },
        {
          id: 3,
          name: 'product3'
        },
        {
          id: 4,
          name: 'product4'
        }
      ],
      newProduct: {
        name: ''
      }
    }
  },
  methods: {
    addNewProduct() {
      this.$validator.validate().then(result => {
        if (result) {
          const id = Math.floor(Math.random())
          this.products.push({
            id: id,
            ...this.newProduct
          })
          this.newProduct.name = ''
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
    }
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
