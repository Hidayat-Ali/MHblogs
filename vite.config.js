import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.svelte'],
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// Add the path to your static folder
				'/Users/Hidayat/Documents/projects/my-portfolio/static'
			]
		}
	}
});
