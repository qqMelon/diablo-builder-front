// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'\

// Custom theme
const myCustomTheme: { variables: undefined; dark: boolean; colors: { secondary: string; white: string; background: string; success: string; warning: string; error: string; primary: string; info: string } } = {
    variables: undefined,
    dark: true,
    colors: {
        background: "#2c2c30",
        primary: "#d32727",
        secondary: "#D4D4D8",
        white: "#F8FAFC",
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify(
    components,
    {
        theme: {
            defaultTheme: 'myCustomTheme',
            themes: {
                myCustomTheme,
            }
        }
    }
)
