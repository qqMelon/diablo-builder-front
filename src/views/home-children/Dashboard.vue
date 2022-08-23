<script setup lang="ts">
import { Set } from "../../interfaces/set";
import SetCard from '@/components/SetCard.vue'

// Mocking dataset for example
const sets: Set[] = [
  { id: '1', title: 'Permafrost wizzard', gameVersion: '2.5.7', author: 'qqMelon', classGame: 'Wizzard', difficulty: 'low', imageUrl: 'https://eu.diablo3.blizzard.com/static/images/hero/wizard/bg.jpg' },
  { id: '2', title: 'SunWukong Monk', gameVersion: '2.5.7', author: 'qqMelon', classGame: 'Monk', difficulty: 'medium', imageUrl: 'https://eu.diablo3.blizzard.com/static/images/hero/monk/bg.jpg' },
  { id: '3', title: 'Barbstroming', gameVersion: '2.5.7', author: 'qqMelon', classGame: 'Barbarian', difficulty: 'low', imageUrl: 'https://eu.diablo3.blizzard.com/static/images/hero/barbarian/bg.jpg' },
  { id: '4', title: 'Necroman', gameVersion: '2.5.7', author: 'qqMelon', classGame: 'Necromancer', difficulty: 'high', imageUrl: 'https://eu.diablo3.blizzard.com/static/images/hero/necromancer/bg.jpg' }
]
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-row class="pl-3 mb-3">
          <h5 class="text-h4">Lastest builds</h5>
        </v-row>
        <v-row>
          <v-col v-for="set in sets" :key="set.id" cols="4">
            <SetCard :id="set.id" :title="set.title" :author="set.author" :game-version="set.gameVersion" :class-game="set.classGame" :difficulty="set.difficulty" :imageUrl="set.imageUrl" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>