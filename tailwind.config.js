/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        cyan: 'hsl(193, 38%, 86%)',
        neon: 'hsl(150, 100%, 66%)',
        grayBlue: 'hsl(217, 19%, 38%)',
        drkGray: 'hsl(218, 20%, 24%)',
        drkBlue: 'hsl(218, 23%, 16%)',
      },
    },
  },
  plugins: [],
}
