<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld message="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style scoped>
img {
  width: 30%;
  padding: 1.5em;
  box-shadow: 0 0 10px black;
}
</style>
