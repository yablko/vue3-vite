<template>
  <ul>
    <li v-for="(dude, index) in characters" :key="index">
      {{ dude }}
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
export default {
  data() {
    return {
      newDude: 'hello',
      characters: ['Jake the Dog', 'Finn the Human', 'Marceline the Vampire'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
