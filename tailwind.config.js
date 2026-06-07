/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        safari: {
          50:  '#fff8ed',
          100: '#ffefd3',
          500: '#f97316',
          600: '#ea6c0a',
          700: '#c2570a',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
}
