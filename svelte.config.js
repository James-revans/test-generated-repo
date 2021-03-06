import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		vite: {
			resolve: {
				alias: {
					$static: resolve('./src/static'),
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
