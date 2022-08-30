<script lang="ts">
import {useTheme} from 'vuetify'
import Client from "./services/client";
import { useClientStore } from "./stores/client";

export default {
  name: 'App',
  methods: {
    initAppWithAccessToken: async function () {
      const clientStore = useClientStore()
      const req = await Client.getAccessToken()
      const reqForm = {
        accessToken: req.access_token as string,
        expireIn: req.expires_in as number
      }
      clientStore.credentials = reqForm as any
      localStorage.setItem('diabloBuilderAccessToken', reqForm.accessToken as string)
      localStorage.setItem('diabloBuilderExpireToken', reqForm['expireIn'].toString())
    }
  },
  mounted: function () {
    const clientStore = useClientStore()
    if (clientStore.credentials.accessToken !== '') {
      this.initAppWithAccessToken()
    }
  },
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
