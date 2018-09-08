<template>
  <div>
    <input type="text" v-model="search" placeholder="Search product by name..." />
    <button v-show="search.length" @click.prevent="clearSearch">x</button>

    <ul v-if="products">
        <product-list-item :item="product" v-for="(product, index) in filteredList" :key="index" @remove="removeProduct(...arguments)"></product-list-item>
    </ul>
    <div v-else>No products</div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  data() {
    return {
      search: ''
    }
  },
  props: {
    products: {
      type: Array,
      required: true
    },
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
    },
    clearSearch() {
        this.search = ''
    }
  },
  components: {
    ProductListItem
  }
}
</script>