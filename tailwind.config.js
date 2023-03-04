/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pantone: "#25282A",
        "pantone-red": "#F93822",
        "pantone-gray": "#F5F8FA",
        "pantone-green": "#84AE2B",
        "pantone-blue": "#00A3E0",
      },
    },
  },
  plugins: [],
};
