/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins:[
    require('flowbite/plugin')
  ],
  content: ["index.html","link/decnos_art.html", "link/iot.html", "link/line_follower.html", "link/tori_caffe.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    borderWidth:{
      "3":"3px",
    },
    extend: {
      margin:{
        "mobile" : "70px",
        "10px": "10px",
        "50px": "50px",
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
        "smoke-black": "#0D0D0D",
      },
      fontFamily: {
        "inter":['Inter', 'sans-serif'],
      },
      height: {
        "desk": "375px",
        "mobile": "250px",
        "100px": "100px",
        "120px": "120px",
        "256px": "256px",
        "590px":"550px",
        "410px": "410px",
        "390px": "390px",
        "577px": "577px",
        "78%":"78%",
        "80%":"80%",
        "95%": "95%",
      },
      width: {
        "2px": "2px",
        "190px": "190px",
        "380px": "380px",
        "410px": "410px",
        "472px": "472px",
        "1120px": "1120px",
        "1314px": "1314px",
        "95%": "95%",
      },
      letterSpacing:{
        "5%": "1.2px",
        "8%": "3.84px",
      },
      backgroundSize:{
        "90%": "90%",
        "95%": "95%",
        "100%":"100%",
      }
    },
  },
  plugins: [],
}

