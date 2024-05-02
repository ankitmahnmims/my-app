module.exports = {
    parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true // Enable JSX
    }
  },
    extends: ['eslint:recommended', 'plugin:@next/next/recommended', 'prettier', 'plugin:react/recommended'],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
      "react/no-unknown-property": [
        2,
        {
          "ignore": [
            "jsx"
          ]
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  ;
  