import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff4f0',
          100: '#ffe8de',
          200: '#ffd0bc',
          300: '#ffad92',
          400: '#fb8764',
          500: '#fa7454',
          600: '#fa6c46',
          700: '#e5541e',
          800: '#c14016',
          900: '#9c3210',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
