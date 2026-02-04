/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#139CFF",
          hover: "#0B6FD6",
          soft: "rgba(19,156,255,.18)",
        },
      },
    },
  },
  plugins: [],
};
