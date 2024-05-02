module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
    plugins: ['react', 'react-hooks', 'prettier'],
    parser: "babel-eslint",
    rules: {
      'prettier/prettier': 'error'
    },
      "parserOptions": {
          "sourceType": "module"
      },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  