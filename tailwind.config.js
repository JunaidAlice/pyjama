/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        acme:[ "Acme","sans-serif"
  ]
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear  infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        "900px": "900px",
        "1000px": "1000px",
        "500px": "500px",
      },
    },
  },
  plugins: [require("daisyui")],
};
