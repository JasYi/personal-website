/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
