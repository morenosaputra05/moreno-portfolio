/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      margin:{
        "mobile" : "70px",
        "10px": "10px",
        "100px": "100px",
      },
      padding: {
        "title": "10px",
      },
      fontSize: {
        "16px": "16px",
        "22px" : "22px",
        "24px":"24px",
        "26px": "26px",
        "40px": "40px",
        "140px": "140px",
        "240px": "240px",
      },
      colors: {
        "smoke": "#DBDBDB",
      },
      fontFamily: {
        "inter":['Inter', 'sans-serif'],
      },
      height: {
        "desk": "375px",
        "mobile": "250px",
        "120px": "120px",
        "256px": "256px",
        "410px": "410px",
        "390px": "390px",
        "577px": "577px",
      },
      width: {
        "190px": "190px",
        "410px": "410px",
        "472px": "472px",
        "1314px": "1314px",
      },
      letterSpacing:{
        "5%": "1.2px",
        "8%": "3.84px",
      },
      backgroundSize:{
        "90%": "90%",
      }
    },
  },
  plugins: [],
}

