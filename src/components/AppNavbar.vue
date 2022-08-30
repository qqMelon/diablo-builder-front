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
      <div class="app-navbar-link-container flex-row align-center">
        <router-link to="/home-dashboard" class="text-decoration-none text-uppercase mr-4 font-weight-regular">Home</router-link>
        <router-link to="/home-builds" class="text-decoration-none text-uppercase mr-4 font-weight-regular">Builds</router-link>
        <router-link to="/home-leaderboard" class="text-decoration-none text-uppercase mr-4 font-weight-regular">LeaderBoard</router-link>
      </div>
      <AppButton title="Connexion"/>
    </template>
  </v-app-bar>
</template>

<style scoped>
.app-navbar-link-container {
  display: flex;
}

.app-navbar-link-container > a {
  color: #B03E3E;
}

.app-navbar-link-container > a:hover {
  color: #29292C;
}
</style>