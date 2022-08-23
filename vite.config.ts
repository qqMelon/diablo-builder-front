import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'
import * as path from "path";

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	]
})
