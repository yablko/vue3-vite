<template>
  <form @submit.prevent="formSubmitted" class="add-new">
    <input @input="valueChanged" type="text" />
  </form>
</template>

<script>
export default {
  methods: {
    formSubmitted() {
      alert('FORM SUBMITTED!!')
    },
    valueChanged(e) {
      console.log(e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
