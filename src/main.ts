import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './styles/app.css'

// Store from pinia
import { store } from './stores';

loadFonts().then(() => {})

function InitApp () {
    const app = createApp(App)
        .use(vuetify)
        .use(store)
        .use(router)

    app.mount('#root')
}

InitApp()
