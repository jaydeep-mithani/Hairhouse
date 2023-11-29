module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    'postcss-custom-media': {
      importFrom: {
        customMedia: require('@overdose/components/src/presets/mq.json'),
      },
    },
  },
}
