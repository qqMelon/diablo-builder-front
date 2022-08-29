import { defineStore } from "pinia";

export const useClientStore = defineStore('client', {
    state: () => ({
        tokenSecret: import.meta.env.VITE_BLIZZ_API_KEY,
        tokenClient: import.meta.env.VITE_BLIZZ_CLIENT_ID,
        accessToken: import.meta.env.VITE_ACCESS_TOKEN,
        baseUrl: 'https://eu.api.blizzard.com/'
    })
})
