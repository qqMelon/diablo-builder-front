import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './styles/app.css'

// Store from pinia
import { mapStores } from 'pinia'
import { store } from './stores';
import { useClientStore } from "./stores/client";

loadFonts().then(() => {})

const app = createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)

// Map stores
const stores = mapStores(
    useClientStore
)
Object.keys(stores).forEach((k) => (app.config.globalProperties[k] = (stores as any)[k]()))

app.mount('#root')
