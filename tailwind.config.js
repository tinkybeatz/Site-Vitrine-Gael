/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ['"Roboto Flex"', 'sans-serif'],
      title: ['"ScribSans"', 'cursive'], // Using ScribSans font for titles
      scrib: ['"ScribSans"', 'cursive'], // ScribSans font
      emoji: ['"Noto Color Emoji"', '"Apple Color Emoji"', '"Segoe UI Emoji"', 'sans-serif'], // Consistent emojis across platforms
    },
    screens: {
      'xl': {'min': '1520px'},
      // => @media (min-width: 1520px) { ... }

      'lg': {'min': '1200px', 'max': '1520px'},
      // => @media (min-width: 1200px, max-width: 1520px) { ... }

      'md': {'min': '1024px', 'max': '1200px'},
      // => @media (min-width: 1024px, max-width: 1200px) { ... }

      'tablet': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 768px, max-width: 1024px) { ... }

      'mobile': {'max': '768px'},
      // => @media (max-width: 768px) { ... }
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
