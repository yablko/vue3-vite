<template>
  <ul>
    <li v-for="(dude, index) in characters" :key="index">
      <Dude :name="dude" title="hello, my good dude" />
    </li>
  </ul>

  <form @submit.prevent="characters.push(newDude)" class="add-new">
    <input v-model="newDude" type="text" />
  </form>

  <p class="preview">
    {{ newDude }}
  </p>
</template>

<script>
import Dude from './components/Dude.vue'

export default {
  components: {
    Dude,
  },
  data() {
    return {
      newDude: 'hello',
      characters: ['Jake the Dog', 'Finn the Human', 'Marceline the Vampire'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
