/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'darkgradient': 'linear-gradient(to right, #d1d1d145, transparent 90%)',
        'lightgradient': 'linear-gradient(to right, rgb(214 214 214), transparent 90%)',
      }),
    },
  },
  plugins: [],
}