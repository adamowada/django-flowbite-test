/* 9. new */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './templates/**/*.html',  /* 10. new */
      './node_modules/flowbite/**/*.js'  /* 13. new */
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')  /* 12. new */
  ]
}
