module.exports = {
    parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true // Enable JSX
    }
  },
    extends: ['eslint:recommended', 'plugin:@next/next/recommended', 'prettier', 'plugin:react/recommended'],
    plugins: ['react'],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error" 
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  ;
  