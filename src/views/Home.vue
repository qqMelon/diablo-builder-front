<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import { onMounted } from 'vue'
import { useClientStore } from '../stores/client'
import { useSeasonStore } from '../stores/season'
import Season from '../services/season'

const seasonStore = useSeasonStore()
const clientStore = useClientStore()

const getActiveSeason = function () {
  Season.getActiveSeason(clientStore.credentials.accessToken)
      .then(response => seasonStore.currentSeason = response.data.current_season)
      .catch(error => console.error(error))
}

onMounted(() => {
  getActiveSeason()
})
</script>

<template>
  <AppNavbar />
  <router-view />
</template>