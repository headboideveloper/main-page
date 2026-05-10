/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.7s ease-out forwards',
        'fade-slide-up-slow': 'fadeSlideUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'marquee': 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
}

