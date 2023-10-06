import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: adapter(),
        alias: {
            $src: './src'
        }
    },
    preprocess: vitePreprocess()
}
