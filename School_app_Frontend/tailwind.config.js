/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      colors: {
        customBackground: "#283046", // Custom background color
        customText: "#FFFFFF", // Custom text color
        placeholder: "#A0AEC0", // Placeholder text color
        gold: {
          500: '#d4af37',
          600: '#b7950b',
          700: '#a17c00',
        },
        'vibrant-blue': '#007BFF',
        'vibrant-green': '#28A745',
        'vibrant-orange': '#FFC107',
        'vibrant-red': '#DC3545',
      },
      container: {
        center: true,
        padding: "2rem", // Center the container with padding
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive"],
      visibility: ["responsive"],
      flexWrap: ["responsive"],
    },
  },
  plugins: [],
};
