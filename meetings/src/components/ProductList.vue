<template>
  <div>
    <ul v-if="products">
        <product-list-item :item="product" v-for="(product, index) in products" :key="index" @remove="removeProduct(...arguments)"></product-list-item>
    </ul>
    <div v-else>No products</div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    },
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
    }
  },
  components: {
    ProductListItem
  }
}
</script>