<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue'
import http from "@/services";
import { onUpdated } from "vue";
import { useSeasonStore } from '@/stores/season'

const seasonStore = useSeasonStore()

// Get and store the active season
const getActiveSeason = function () {
  http.get('/data/d3/season/')
      .then((response: any) => {
        seasonStore.currentSeason = response.data.current_season
      })
      .catch((error: any) => { console.warn(error)})
}

onUpdated(() => {
  getActiveSeason()
})
</script>

<template>
  <AppNavbar />
  <router-view />
</template>