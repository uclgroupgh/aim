/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'med_blue': '#135cb0',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'black': '#1a1a1a',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-lighter': '#f5f5f5',
      'gray-border': '#dcdcdc',
      'gray-footer': '#333333',
      'gray-footer-secondary': '#b3b3b3',
      'primary_red': '#d11947',
      'primary_red_dark': '#a31438',
      'white': '#ffffff',
      'off_white': '#f5f5f5'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero4.jpg')",
        'about_hero': "url('/images/about_hero.jpg')",
        'about_cofounder': "url('/images/cofounder.jpg')"
      },
      fontFamily: {
        Open: ["Open Sans", "sans-serif"]
      },
      gridTemplateColumns: {
        'three_column': 'repeat(3, minmax(0, 1fr))',
        'text_image_left': '1fr 2fr',
        'text_image_right': '2fr 1fr'
      },
      gridTemplateRows: {
        'three_row': 'repeat(3, 300px)'
      }
    },
  },
  plugins: []
}
