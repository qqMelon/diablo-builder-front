<script lang="ts">
import { useTheme } from 'vuetify'

export default {
  setup: function () {
    const theme = useTheme()

    return {
      theme
    }
  }
}
</script>

<template>
  <v-app theme="myCustomTheme">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
