export default {
    darkMode: 'class', // important!
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
        },
        animation: {
          slideDown: 'slideDown 0.4s ease forwards',
        },
      },
    },
    plugins: [],
  }
  