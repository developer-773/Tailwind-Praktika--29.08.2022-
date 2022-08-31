/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {

    extend: {
      container: {
        padding: '25px',
      },
      screens: {
        mn: '576px',
        sm: '680px',
        md: '768px',
        smd: '928px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      fontFamily: {
        body: ["Be Vietnam Pro"],
      },
      boxShadow: {
        btnn: "0px 15px 15px -10px #FF9F8E",
      },
      colors: {
        bttn: '#F3603C',
        bgBox: '#fafafa',
        footer: '#1D1E25',
      },
      backgroundImage: {
        'bgTop': "url('/src/image/bg-oval.svg')",
        'bgBottom': "url('/src/image/bg-oval2.svg')",
      },
    },
  },
  plugins: [],
}
