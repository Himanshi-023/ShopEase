/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "rgb(97, 94, 252)", //dark purple
        secondary: "rgb(131, 111, 255)",     //light purple          
        ternary: "rgb(65, 201, 226)",
        fourth:"rgb(5, 12, 156)",
        background: "",
        foreground: "",
        front: "",
        back: "",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};



// rgb(131, 111, 255)