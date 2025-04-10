/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: '#1B1444',
        secondary: '#F39248',
        textDark: '#2D2A48',
        background: "#F5F5F5",
        textBlue:'#000080',
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
