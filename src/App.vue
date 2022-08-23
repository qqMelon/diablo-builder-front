<script setup lang="ts">
import {useTheme} from "vuetify";

useTheme().global.name.value = 'dark'
</script>

<template>
  <v-app theme="dark">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
