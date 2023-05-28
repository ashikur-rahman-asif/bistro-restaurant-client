/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgText': "url('https://i.ibb.co/K6BK2ZX/chef-service.jpg')",
       
      }
    },
  },
  plugins: [require("daisyui")],
}

