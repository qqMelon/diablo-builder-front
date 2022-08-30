<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LeaderboardFilter from '@/components/LeaderboardFilter.vue'
import { useClientStore } from '@/stores/client'
import { useSeasonStore } from '@/stores/season'
import Season from '@/services/season'

const seasonStore = useSeasonStore()
const clientStore = useClientStore()

const leaderBoardData = ref<any>({ row: [{ data: [ {}, { number: 0 }, { timestamp: 0 }, {}, { string: '' } ]}] })
const leaderBoardClassChoice = ref<string>('Monk')
const leaderBoardModChoice = ref<string>('Normal')
const leaderBoardTypeChoice = ref<string>('Rift')

const getLeaderboards = function () {
  Season.getLeaderboardSeason(
      clientStore.credentials.accessToken,
      seasonStore.currentSeason,
      leaderBoardTypeChoice.value.toLowerCase() + '-' + leaderBoardClassChoice.value.toLowerCase()
  ).then(response => leaderBoardData.value = response.data)
      .catch(error => console.error(error))
}

const convertTime = function (time) {
  const ts = new Date(time)
  return ts.toLocaleDateString()
}

onMounted(() => {
  getLeaderboards()
})
</script>

<template>
  <v-container fluid>
    <v-row class="pl-3 mt-5">
      <LeaderboardFilter
          :class-choice="leaderBoardClassChoice"
          :mod-choice="leaderBoardModChoice"
          :type-choice="leaderBoardTypeChoice"
      />
      <p class="ml-5 pt-3">Blizzard last update: <strong>{{ leaderBoardData?.last_update_time || '' }}</strong></p>
    </v-row>
    <v-row>
      <v-table
          :fixed-header="true"
      >
        <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Key level
          </th>
          <th class="text-left">
            Completed
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="row in leaderBoardData.row"
        >
          <td>{{ row.data[4].string }}</td>
          <td>{{ row.data[1].number }}</td>
          <td>{{ convertTime(row.data[3].timestamp) }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-row>
  </v-container>
</template>