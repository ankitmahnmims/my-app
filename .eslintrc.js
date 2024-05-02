module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
