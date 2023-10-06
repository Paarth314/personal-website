import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      body_mono: ['IBM Plex Mono', 'mono space'],
      heading: ['Montserrat', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes:["business"]
  }
} satisfies Config
