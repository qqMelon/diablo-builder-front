import { defineStore } from 'pinia'

export const useSeasonStore = defineStore('season', {
    state: () => ({
        currentSeason: '' as string
    })
})