/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A508E',
        secondary: '#E5F0F1',
        tertiary: '#00DC82',
        primaryText: '#000000',
        secondaryText: '#838383',
        ctaText: '#FFFFFF',
      },
      fontFamily: {
        urbanVst: ['UrbanVst', 'sans-serif'],
      },
      fontSize: {
        h1: '40px', // Tailwind will apply its default line height
        h2: '32px', // Tailwind will apply its default line height
        h3: '27px', // Tailwind will apply its default line height
        h4: '22px', // Tailwind will apply its default line height
        body1: '18px', // Tailwind will apply its default line height
        body2: '16px', // Tailwind will apply its default line height
        cta: '18px', // Tailwind will apply its default line height
      },
      padding: {
        p2: '150px',
        pxl: '120px',
        plg: '70px',
        pmd: '40px',
        pxs: '16px',
      },
      screens: {
        'xs': '320px', // Extra small screens
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '992px', // Custom breakpoint for large screens
        'xl': '1200px', // Custom breakpoint for extra-large screens
        '2xl': '1440px', // Custom breakpoint for 2X extra-large screens
      },
    },
  },
  plugins: [],
};
