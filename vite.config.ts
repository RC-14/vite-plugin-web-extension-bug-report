import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";

export default defineConfig({
	plugins: [
		webExtension({
			manifest: './src/manifest.json',
			browser: 'firefox',
			webExtConfig: {
				target: ['firefox-desktop'],
				startUrl: ['about:debugging#/runtime/this-firefox'],
				firefox: 'firefoxdeveloperedition',
				firefoxProfile: 'dev-edition-default',
				keepProfileChanges: false
			}
		})
	],
});
