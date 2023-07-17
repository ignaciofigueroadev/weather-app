/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b131e",
        "background-components": "#202b3b",
        "principal-color": "#f0f0f2",
        "secondary-color": "#6a717b",
      },
    },
  },
  plugins: [],
};
