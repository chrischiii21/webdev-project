/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'primary': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'midnight-navy': '#0A1931',
        'helios-orange': '#F48C06',
        'steel-pewter': '#99B0BB',
        'parchment': '#F5F5F5',
        'machinist': '#7E7E7E',
      }
    },
  },
  plugins: [],
}