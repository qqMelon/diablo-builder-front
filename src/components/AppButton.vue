<script setup lang="ts">
defineProps<{
  title: String
}>()
</script>

<template>
  <v-btn
      class="app-button"
      color="white"
      plain
  >
   {{ $props.title }}
  </v-btn>
</template>

<style scoped>
.app-button {
  background-color: #B03E3E;
}
</style>