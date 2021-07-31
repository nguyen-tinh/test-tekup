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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
