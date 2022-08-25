<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <v-app-bar
      color="white"
      density="compact"
      height="86"
  >
    <v-app-bar-title>Diablo Builder</v-app-bar-title>
    <template v-slot:append>
      <AppButton title="Connexion"/>
    </template>
  </v-app-bar>
</template>