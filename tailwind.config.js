/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage :{
      'profile-photo' : "url('./src/assets/side-lighting-in-photography-1024x683.jpg')"
      },
    },
  },
  plugins: [],
}

