import type { Config } from 'tailwindcss'

const helveticaNeueME = ["'Helvetica Neue ME'", 'Helvetica', 'Arial', 'sans-serif']

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#efeee9',
      },
      fontFamily: {
        hn: helveticaNeueME,
        sans: helveticaNeueME,
        serif: helveticaNeueME,
      },
    },
  },
  plugins: [],
} satisfies Config
