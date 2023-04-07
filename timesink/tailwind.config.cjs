/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "mystery-white": "#F5F7F9",
        "dark-theater-primary": "#1B1C1E",
        "dark-theater-medium": "#3B3B3B",
        "dark-theater-light": "#545454",
        "dark-theater-lightest": "#6E6E6E",
        "neon-blue-heavy": "#4987FF",
        "neon-blue-primary": "#7AA8FF",
        "neon-blue-light": "#ADC9FF",
        "neon-blue-lightest": "#E0EBFF",
        "neon-red-primary": "#EC2013",
        "neon-red-light": "#FF6640",
        "neon-red-lightest": "#FE6D48",
        "gray-display-heavy": "#ffffff1a",
        "gray-display-primary": "#D4D6DC",
        "gray-display-medium": "#E3E4E8",
        "gray-display-light": "#F1F2F4",
      },
      fontFamily: {
        kingdom: ["var(--font-kingdom)"],
        logo: ["var(--font-logo)"],
        logo_italic: ["var(--font-logo_italic)"],
        OGSans: ["var(--font-OGSans)"],
        lyon: ["var(--font-lyon)"],
      },
      fontSize: {
        xsm: ["10px"],
        sm: ["14px", "20px"],
        md: ["24px"],
        lg: ["32px"],
      },
    },
  },
  variants: {},
  plugins: [],
};
