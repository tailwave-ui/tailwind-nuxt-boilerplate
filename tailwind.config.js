/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: ({ colors }) => ({
        // Define your project's color palette here
        primary: {
          light: '#0da5ea',
          DEFAULT: '#0da5ea',
          dark: '#2C5282',
        },
        secondary: {
          light: '#F7FAFC',
          DEFAULT: '#EDF2F7',
          dark: '#CBD5E0',
        },
        // Add more colors as needed
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
          200: "#C6C8CD",
          300: "#ACAEB6",
          400: "#92959F",
          500: "#777C87",
          600: "#5D6370",
          700: "#434959",
          800: "#293041",
          900: "#0f172a",
        },
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      }),
      backgroundColor: ({ theme }) => theme('colors'),
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      boxShadowColor: ({ theme }) => theme('colors'),
      caretColor: ({ theme }) => theme('colors'),
      accentColor: ({ theme }) => ({
        ...theme('colors'),
        auto: 'auto',
      }),
      fill: ({ theme }) => theme('colors'),
    },
    darkSelector: '.dark-mode'
  },
  darkMode: 'class',
  plugins: [],
}

