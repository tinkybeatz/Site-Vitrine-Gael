/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ['"Roboto Flex"', 'sans-serif'],
      title: ['"ScribSans"', 'cursive'], // Using ScribSans font for titles
      scrib: ['"ScribSans"', 'cursive'], // ScribSans font
    },
    screens: {
      'xl': {'min': '1520px'},
      // => @media (min-width: 1520px) { ... }

      'lg': {'min': '950px', 'max': '1520px'},
      // => @media (min-width: 950px, max-width: 1520px) { ... }

      'sm': {'max': '950px'},
      // => @media (max-width: 950px) { ... }
    },
    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
    extend: {
      backgroundImage: {
        "main-page-back": "url('../images/MainPage.jpg')",
      },
      letterSpacing: {
        'extra-tight': '-0.08em',  // Custom even tighter tracking
      },
    },
  },
  plugins: [],
};
