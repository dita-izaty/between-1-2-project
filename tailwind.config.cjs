/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'monologue' : ['Monologue', 'sans-serif'],
      'mont' : ['Mont', 'sans-serif'],
      'neue' : ['Neue', 'sans-serif'],
      'varela' : ['Varela', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'white' : '#FFECD2',
        'pinky' : '#F15CA2',
        'apricot' : '#FCCFA6',
        'neon-magenta' : '#FF5FA2',
        'nay' : '#5BC2E7',
        'jeong' : '#C5D97A',
        'momo' : '#FF8DA1',
        'sana' : '#9B7DD4',
        'jyo' : '#FFC56E',
        'mina' : '#6DCDB8',
        'dub' : '#FFFFFF',
        'chae' : '#EE2737',
        'tzu' : '#005EB8',
      },
    },
  },
  plugins: [require("daisyui")],
}
