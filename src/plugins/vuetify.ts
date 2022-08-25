// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'\

// Custom theme
const myCustomTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: "#29292C",
        primary: "#B03E3E",
        secondary: "#D4D4D8",
        white: "#F8FAFC",
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
            myCustomTheme,
        }
    }
})
