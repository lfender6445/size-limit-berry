const prod = process.env.PRODUCTION
  ? {
      cssnano: {
        zindex: false,
        // autoprefixer is included in postcss-preset-env, so no need to do it again in nano
        autoprefixer: false,
        discardComments: {
          removeAll: true,
        },
      },
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
      },
    }
  : {}

module.exports = {
  plugins: {
    tailwindcss: require('./tailwind.config'),
    ...prod,
  },
}
