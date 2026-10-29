/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          ink: '#0a0a0a',
          paper: '#ffffff',
          orange: '#ff5722',
          yellow: '#ffeb3b',
        },
        terracotta: {
          50: '#fff3ee',
          100: '#ffe0d5',
          200: '#ffc0aa',
          300: '#ff9675',
          400: '#ff7043',
          500: '#ff5722',
          600: '#e7440f',
          700: '#bd3308',
          800: '#962a0b',
          900: '#79260f',
        },
        sage: {
          50: '#f7f7f5',
          100: '#e9e8e3',
          200: '#d2d0c8',
          300: '#aaa8a0',
          400: '#86847d',
          500: '#696861',
          600: '#50504b',
          700: '#383835',
          800: '#232322',
          900: '#0a0a0a',
        },
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(10, 10, 10, 0.18)',
        pop: '3px 3px 0 0 #ff5722',
      },
    },
  },
  plugins: [],
};
