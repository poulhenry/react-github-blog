/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans serif'],
      },
      colors: {
        brand: '#3294F8',
        'base-brand': '#040F1A',
        'base-background': '#071422',
        'base-profile': '#0B1B2B',
        'base-post': '#112131',
        'base-border': '#1C2F41',
        'base-label': '#3A536B',
        'base-span': '#7B96B2',
        'base-text': '#AFC2D4',
        'base-subtitle': '#C4D4E3',
        'base-title': '#E7EDF4',
      },
      backgroundImage: {
        'header-img': "url('./assets/imgs/cover.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
