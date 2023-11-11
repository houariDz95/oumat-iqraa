/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xs" : "290px",
      },
      backgroundColor: {
        "main-bg": "#6449ff"
      },
      colors: {
        "primary": "#6449ff",
        "secondary": "#e84118",
        "black": "#222831",
        textColor: "#646464",
      },
      boxShadow: {
        "card": '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        "cardhover": '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
}
