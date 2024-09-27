/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
    ".src/components/*.{js,ts,jsx,tsx}",
    ".src/pages/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   'dark-navy': "#020c1b",
      //   "navy": "#f5f5f5",
      //   "light-navy": "#f5e6cc",
      //   "lightest-navy": "#495670",
      //   "navy-shadow": "rgba(2,12,27,0.7)",
      //   "dark-slate": "#495670",
      //   "slate": "#EC7063",
      //   "light-slate": "#EC7063",
      //   "lightest-slate": "#EC7063",
      //   "white": "#e6f1ff",
      //   "green": "#63ecb5",
      //   "green-tint": "rgba(100,255,218,0.1)",
      //   "pink": "#f57dff",
      //   "blue": "#57cbff",
      // }

      colors: {
        "dark-navy": "#020c1b",
        "navy": "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "navy-shadow": "rgba(2, 12, 27, 0.7)",
        "dark-slate": "#495670",
        "slate": "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        "white": "#e6f1ff",
        "green": "#64ffda",
        "green-tint": "rgba(100, 255, 218, 0.102)",
        "pink": "#f57dff",
        "blue": "#57cbff",
      }

      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
