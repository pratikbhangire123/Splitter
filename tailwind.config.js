/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Primary
        strongcyan: "hsl(172, 67%, 45%)",
        //Neutral
        verydarkcyan: "hsl(183, 100%, 15%)",
        darkgrayishcyan: "hsl(186, 14%, 43%)",
        grayishcyan: "hsl(184, 14%, 56%)",
        lightgrayishcyan: "hsl(185, 41%, 84%)",
        verylightgrayishcyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
