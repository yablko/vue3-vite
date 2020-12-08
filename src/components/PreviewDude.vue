<template>
  <p class="preview">
    {{ name }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  created() {
    window.eventBus.on('new-preview', (event) => (this.name = event))
  },
}
</script>

<style lang="scss" scoped></style>
