module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        accent: "#C6B67E",
        error: "#C86966",
        success: "##96B444",
        warning: "#CD9E43",
        info: "#1F1F1F",
        link: "#FCFCFC",
        warningBlue: "#2866C3",
        hoverColor: "#BDAA66",
        grayDarkColor: "#616161",
        grayColor: "#ACACAC",
        grayLightColor: "#E7E7E7",
      },
      animation: {
        slideLeft: 'slideLeft 0.4s ease-out forwards'
      },
      keyframes: {
        slideLeft: {
          '0%': {transform: 'translateX(80rem)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
