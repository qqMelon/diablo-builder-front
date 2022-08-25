<script setup lang="ts">
defineProps<{
  title: string,
  imageUrl: string,
  author: string,
  action: string,
  content: string
}>()
</script>

<template>
  <v-list-item
      :prepend-avatar="imageUrl"
      class="mb-3"
      :title="title"
  >
    <template v-slot:subtitle>
      <span class="font-weight-bold">{{ $props.author }}</span>
      &mdash; {{ $props.content }}
    </template>
  </v-list-item>
  <v-divider :inset="true"></v-divider>
</template>