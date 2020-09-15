module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors:{
        gray:{
          900:'hsl(210, 27.5%, 28%)',
        },
        body:{
          default: 'hsl(210, 34.4%, 12.5%)',
        },
        primary:{
          default: 'hsl(202.8, 89.1%, 53.1%)',
          600: 'hsl(202.8, 89.1%, 23.1%)',
        }
      }
    },
  },
  variants: {
    backgroundColor:['hover', 'focus', 'group-hover'],
    textColor:['hover', 'focus', 'group-hover'],

  },
  plugins: [],
}
