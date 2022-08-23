<script setup lang="ts">
defineProps<{
  id: String,
  title: String,
  author: String,
  classGame: String,
  difficulty: String,
  imageUrl: String,
  gameVersion: String
}>()
</script>
<template>
  <v-card
      class="set-card-component mx-auto"
      max-width="400"
  >
    <v-img
        class="align-end text-white"
        height="200"
        :src="$props.imageUrl"
        cover
    >
      <v-card-title>{{ $props.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-2">
      Difficulty: {{ $props.difficulty }}
      <p class="float-end text-caption">{{ $props.gameVersion }}</p>
    </v-card-subtitle>

    <v-card-text>
      <div>{{ $props.classGame }} build by: {{ $props.author }}</div>
    </v-card-text>

  </v-card>
</template>

<style scoped>
.set-card-component {
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.set-card-component:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2);
  transform: scale(1.03);
}
</style>