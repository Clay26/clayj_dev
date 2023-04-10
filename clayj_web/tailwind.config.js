/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'header-green': '#ABDBB9',
        'darkblue': '#1C444D',
        'bannerbg': '#0A2E36',
        'banneraccent': '#107A91',
        'banneraccentlt': '#18B3D6',
        'footer': '#071F24',
      },
    },
  },
  plugins: [],
}

