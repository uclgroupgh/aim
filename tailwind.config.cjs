/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'select_option_hover': '#f6f6f6',
      'primary_turquoise': '#00A9AC',
      'primary_amber': '#FA9D1E',
      'blue': '#1fb6ff',
      'med_blue': '#135cb0',
      'primary_blue': '#1577be',
      'purple': '#7e5bef',
      'violet': '#4b2884',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'primary_green': '#03adac',
      'yellow': '#ffc82c',
      'primary_yellow': '#f99c34',
      'black': '#1a1a1a',
      'mobile-gray': '#63666b',
      'impact_gray': '#e6e6e6',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray_hero_bg': '#4c4c4c',
      'gray-light': '#d3dce6',
      'gray-lighter': '#f5f5f5',
      'gray-border': 'rgba(220,220,220,0.5)',
      'gray-footer': '#333333',
      'gray-footer-secondary': '#b3b3b3',
      'gray-input-border': '#cccccc',
      'gray-input-label': '#4d4d4d',
      'primary_red': '#ee0b02',
      'primary_red_dark': '#d50901',
      'error_red': '#e03400',
      'white': '#ffffff',
      'off_white': '#f5f5f5',
      'transparent': 'transparent'
    },
    extend: {
      backgroundImage: {
        'body_bg': "url('/images/main-bg.svg')",
        'hero': "url('/images/hero2.0.jpg')",
        'about_hero': "url('/images/about_hero.jpg')",
        'stories_hero': "url('/images/stories_hero.jpg')",
        'impact_hero': "url('/images/impact_hero.jpg')",
        'values_hero': "url('/images/collage4.jpg')",
        'history_hero': "url('/images/adongo_88.png')",
        'sponsor_hero': "url('/images/sponsor_hero.jpg')",
        'about_cofounder': "url('/images/cofounder.jpg')",
        'story_banner': "url('/images/podium.jpg')",
        'story_banner_2': "url('/images/cofounder_2.jpg')",
        'register_hero': "url('/images/register_bgd.jpg')",
        'past_winners_two_col_hero': "url('/images/about_hero.jpg')",
        'parallax_past_winners': "url('/images/values.jpg')",
        'parallax_course_background': "url('/images/skyline.jpg')",
        'dkfc': "url('/images/dkfc.jpg')",
        'nestle_union': "url('/images/nestle_union.jpg')",
        'four_col': "url('/images/four_col_bg.svg')",
        'registration_bg': "url('/images/bg-form.svg')",
        'registration_bg_after': "url('/images/bg-register.svg')"
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "sans-serif"],
        saxMono: ["saxMono", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
        Londrina_solid: ["Londrina Solid", "cursive"],
        Londrina_outline: ["Londrina Outline", "cursive"],
        Paladins_solid: ["Paladins_solid", "cursive"],
        Paladins_outline: ["Paladins_outline", "cursive"]
      },
      gridTemplateColumns: {
        'three_column': 'repeat(3, minmax(0, 1fr))',
        'two_column': 'repeat(2, minmax(0, 1fr))',
        'four_cols': '1fr 1fr 1fr 1fr',
        'text_image_left': '1fr 2fr',
        'text_image_right': '2fr 1fr',
        'footer_grid': '2fr 1fr 1fr 2fr',
        'mobile_radio_btn_selector': 'repeat(2, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        'three_row': 'repeat(3, 300px)',
        'three_row_mobile': 'repeat(3, 120px)'
      }
    },
  },
  plugins: []
}
