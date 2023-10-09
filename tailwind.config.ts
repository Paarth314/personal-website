import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: ['IBM Plex Mono', 'mono space'],
            body: ['IBM Plex Mono', 'mono space'],
            heading: ['Montserrat', 'sans-serif']
        },
        extend: {}
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                dark_theme: {
                    ...themes['[data-theme=business]'],
                    'base-content': 'white'
                }
            },
            'cupcake'
        ]
    }
} satisfies Config
