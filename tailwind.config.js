/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#3E3E4B",
        gold: "#AB6F0E",
        beige: "#FEF6E9",
        greyCategorie: "#E6E5E5",
        greyCategorieHover: "#F3F0F0",
        greyBg: "rgba(240, 240, 240, 0.5)",
        textColor: "#777272",
        textGrey: "#37496D",
        orange: "#E2670D",
       
         
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};