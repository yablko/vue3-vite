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

  <preview-dude />
</template>

<script>
import Dude from './components/Dude.vue'
import PreviewDude from './components/PreviewDude.vue'
import CreateDudeForm from './components/CreateDudeForm.vue'

export default {
  components: {
    Dude,
    PreviewDude,
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
