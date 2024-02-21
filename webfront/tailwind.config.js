/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

