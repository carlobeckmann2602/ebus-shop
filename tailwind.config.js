/** @type {import('tailwindcss').Config} */
import * as daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#F6EDED",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [daisyui],
};
