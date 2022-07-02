/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, 1fr)',
        '15': 'repeat(15, 1fr)'
      },
      gridColumnEnd: {
        '18': '18'
      },
      gridColumnStart: {
        '13': '13'
      },
      boxShadow: {
        'settings': '0 0 15px -3px #888;'
      },
      inset: {
        'x': 'calc(50% + 10.5rem)',
        'xt': 'calc(50% + 14.5rem)',
        'sw_l': '2px',
        'sw_r': 'calc(1.75rem - 2px)'
      },
      animation: {
        'fade': 'fade 200ms ease-in'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
