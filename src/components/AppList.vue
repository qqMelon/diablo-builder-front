<script setup lang="ts">
defineProps<{
  lines: string
}>()
</script>

<template>
  <v-list class="app-list rounded" :lines="lines">
    <slot>
    </slot>
  </v-list>
</template>