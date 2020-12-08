<template>
  <ul>
    <li v-for="(dude, index) in characters" :key="index">
      <Dude :name="dude" title="hello, my good dude" />
    </li>
  </ul>

  <create-dude-form
    @new-preview="newDude = $event"
    @add-dude="characters.push($event)"
  />

  <p class="preview">
    {{ newDude }}
  </p>
</template>

<script>
import Dude from './components/Dude.vue'
import CreateDudeForm from './components/CreateDudeForm.vue'

export default {
  components: {
    Dude,
    CreateDudeForm,
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
