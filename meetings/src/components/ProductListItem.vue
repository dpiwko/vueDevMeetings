<template>
  <li>
    <span>
      {{ item.Name }}
    </span>
    <button @click="removeProduct(item.id)">×</button>
  </li>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    item: Object,
    required: true
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
    }
  }
}
</script>