<template>
  <li>
    <span>
      {{ item.Name }}
    </span>
    <button @click="removeProduct(item.ProductId)">×</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductListItem',
  props: {
    item: Object,
    required: true
  },
  methods: {
    ...mapActions({
      removeProduct: 'productsStore/removeProduct'
    })
  }
}
</script>