module.exports = {
    parserOptions: {
      "sourceType": "module",
      "ecmaVersion": 2020
  },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
      'prettier/prettier': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  ;
  