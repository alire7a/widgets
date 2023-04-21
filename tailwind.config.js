module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth:{
      "max":"1500px",
    },
    colors: {
      "white":"#fff",
      "primary":"#373131",
      'black': '#0D0807',
      "green": '#2BAC76',
      'red': '#CD2553',
      "purple":"#9DA6FA",
      "gray":{
        "light":"#F8F9FF",
      },
      "transparent":"transparent"
    },
    borderWidth:{
      "1":"1px",
      "2":"2px",
    },

    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '1.875rem',
      '32': '2.25rem',
      '36': '36px',
      '40': '40px',
      '48': '48px',
      '56': ["56px","64px"],
      '64': '64px',
      '120': '120px',
    },
    borderRadius: {
      'none': '0',
      "8" : "8px",
      "12" : "12px",
      "16" : "16px",
      "full":"100%",
    },
    screens:{
      'sm': '640px',
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
      "fhd":"1920px"
    }
    ,


    extend: {},
  },
  plugins: [],
}
