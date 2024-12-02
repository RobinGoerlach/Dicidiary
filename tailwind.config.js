import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure paths match your project structure
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Include DaisyUI in the plugins array
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"], // DaisyUI themes you want to enable
  },
};
