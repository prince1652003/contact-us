module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 900: "#000068" },
        gray: { 600: "#767676" },
        white: { A700: "#ffffff", A700_01: "#ffffff" },
        red: { A700: "#fd0202" },
        black: { 600: "#656d76", 900: "#000000", "900_3f": "#0000003f", A700_01: "#000000" },
      },
      boxShadow: {
        xs: "0px 0px 15px 1px #0000003f",
        sm: "0px 0px 3px 2px #00000019",
        md: "0px 0px 13px 5px #00000029",
      },
      fontFamily: { anekdevanagari: "Anek Devanagari", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
