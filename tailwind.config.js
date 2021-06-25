module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prototurk: '#32445a',
        twitter: '#1da1f2'
      },
      spacing: {
        '15': '3.75rem'
      },
      zIndex: {
        '-1': '-1',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
