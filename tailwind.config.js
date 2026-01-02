// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Set theme colors (Required config!)
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  // Add plugins
  plugins: [typography, forms],
};
