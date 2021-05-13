module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-multiple-template-root': 'off',
    'no-unused-expressions': 'off',
    'vue/no-parsing-error': 'off',
    'no-param-reassign': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './resources/js/']],
        extensions: ['.vue', '.js'],
      },
    },
  },
};
