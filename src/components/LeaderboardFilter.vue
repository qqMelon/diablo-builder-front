<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps<{
  classChoice: String,
  modChoice: String,
  typeChoice: String
}>()

const itemsClass = [ 'Barbarian', 'Witchdoctor', 'Demon hunter', 'Monk', 'Wizzard', 'Necromancer', 'Crusader' ]
const itemsMod = [ 'Normal', 'Seasonal', 'Hardcore' ]
const itemsType = [ 'Achievement Point', 'Rift' ]

const searchByClass = ref<string>()
const searchByMod = ref<string>()
const searchByType = ref<string>()

onMounted(() => {
  searchByClass.value = props.classChoice
  searchByMod.value = props.modChoice
  searchByType.value = props.typeChoice
})

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
      class="app-set-filter"
      v-model="searchByType"
      :items="itemsType"
      label="Type"
      variant="outlined"
      required
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