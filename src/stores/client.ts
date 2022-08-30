import { defineStore } from "pinia";

export const useClientStore = defineStore('client', {
    state: () => ({
        credentials: {
            accessToken: localStorage.getItem('diabloBuilderAccessToken') || '',
            expireIn: localStorage.getItem('diabloBuilderExpireToken') ||  null
        }
    })
})
