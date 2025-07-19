/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
         shimmer: 'shimmer 1.5s infinite linear',
    mist: 'mist 2.5s ease-in-out infinite',
    floatX: 'floatX 3s ease-in-out infinite',
      },
      keyframes: {
       shimmer: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
    mist: {
      '0%': { transform: 'translateY(0)', opacity: '0.4' },
      '100%': { transform: 'translateY(-20px)', opacity: '0' },
    },
    floatX: {
      '0%': { transform: 'translateX(0px)' },
      '50%': { transform: 'translateX(10px)' },
      '100%': { transform: 'translateX(0px)' },
    },
      },
    },
  },
  plugins: [],
}

