<script setup lang="ts">
import { ref } from "vue";

const itemsClass = [ 'Barbarian', 'Witchdoctor', 'Demon hunter', 'Monk', 'Wizzard', 'Necromancer', 'Crusader' ]
const itemsMod = [ 'Normal', 'Seasonal', 'Hardcore' ]
const itemsTag = [ 'Speed', 'Easy', 'Hard', 'Long build', 'LoN', 'Starter', 'End Game' ]

const searchByClass = ref()
const searchByMod = ref()
const searchByTag = ref()

// Rules input id needed
// :rules="[v => !!v || 'Item is required']"
</script>

<template>
  <v-select
      class="app-set-filter mr-3"
      v-model="searchByClass"
      :items="itemsClass"
      label="By Class"
      variant="outlined"
      required
  ></v-select>
  <v-select
      class="app-set-filter mr-3"
      v-model="searchByMod"
      :items="itemsMod"
      label="Mod"
      variant="outlined"
      required
  ></v-select>
  <v-select
      class="app-set-filter set-filter-tag"
      v-model="searchByTag"
      :items="itemsTag"
      chips
      label="Tags"
      variant="outlined"
      multiple
  ></v-select>
</template>

<style scoped>
.app-set-filter {
  max-width: 187px;
}
.app-set-filter.set-filter-tag {
  min-width: 187px;
  max-width: max-content;
}
</style>