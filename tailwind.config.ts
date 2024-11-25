import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#ecf3ff',
                    '100': '#dce8ff',
                    '200': '#c0d3ff',
                    '300': '#9bb5ff',
                    '400': '#738bff',
                    '500': '#5264ff',
                    '600': '#3338f8',
                    '700': '#292adc',
                    '800': '#2225b1',
                    '900': '#24288b',
                    '950': '#151651'
                },
                accent: {
                    '50': '#effaf3',
                    '100': '#d9f2e2',
                    '200': '#b6e4c9',
                    '300': '#6ec697',
                    '400': '#53b484',
                    '500': '#319868',
                    '600': '#217a52',
                    '700': '#1b6143',
                    '800': '#174e36',
                    '900': '#14402e',
                    '950': '#0a241a'
                }
            },
            fontFamily: {
                altheading: ['Libre Baskerville', 'serif'],
                heading: ['Montserrat', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
                // body: ['Source Sans 3', 'sans-serif'],
                altbody: ['Hind', 'sans-serif']
            }
        }
    },

    plugins: [typography, containerQueries]
} satisfies Config
