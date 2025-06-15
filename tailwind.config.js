/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // 또는 여러분의 프로젝트에 맞는 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'minecraft', 'minecraftbold', 'minecrafttitle', 'sans-serif', 'custom', 'custombold'],
      },
    },
  },
  plugins: [],
};