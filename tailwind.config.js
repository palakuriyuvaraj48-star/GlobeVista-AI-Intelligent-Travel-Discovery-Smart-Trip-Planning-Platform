/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        gv: {
          ocean: '#0b3d5c',
          teal: '#0f6c74',
          sunset: '#f97316',
          coral: '#fb7185',
          mist: '#f5f7f9',
          sand: '#f1ebe4',
          ink: '#0f172a',
          sky: '#d7eef2',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeOut: 'fadeOut 0.6s ease-out forwards',
        slideIn: 'slideIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
        bounce: 'bounce 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
