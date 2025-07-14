/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': 'rgb(126, 27, 63)',
        'brand-gray': 'rgb(109, 106, 106)',
      },
    },
  },
  plugins: [],
};
