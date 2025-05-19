import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // default options are generally fine
            pages: 'build', // or 'docs' if you prefer
            assets: 'build', // or 'docs'
            fallback: undefined, // 'index.html' or '404.html' can be useful for SPAs
            precompress: false,
            strict: true
        }),
        paths: {
            // IMPORTANT: Set this to your repository name if deploying to GitHub Pages
            // e.g., if your repo is https://github.com/user/my-cool-app,
            // then base should be '/my-cool-app'
            // For local development, you might want it to be an empty string.
	    base: '',
	},
        // If you are deploying to a custom domain, or to <username>.github.io,
        // paths.base should be an empty string ''.
        //
        // If you encounter issues with relative paths, especially on the index page,
        // you might experiment with:
        // relative: false,
    }
};

export default config;
