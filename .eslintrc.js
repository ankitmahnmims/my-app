module.exports = {
    parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true // Enable JSX
    }
  },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  ;
  