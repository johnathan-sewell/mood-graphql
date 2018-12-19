module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off'
  }
};
