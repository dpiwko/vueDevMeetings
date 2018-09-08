<template>
  <li>
    <span>
      {{ offer.name }}
    </span>
    <button @click="removeProduct(offer.id)">×</button>
  </li>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    offer: Object
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
    }
  }
}
</script>