<template>
  <h1>{{ message }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['message'],
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
$bg-color: white;

p {
  code {
    color: red;
    background: $bg-color;
    padding: 7px;
    border-radius: 3px;
  }
}
</style>
