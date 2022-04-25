module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'standard-with-typescript', // Installed in step 2
    'eslint-config-prettier', // Installed in step 3
  ],
  parser: '@typescript-eslint/parser', // Installed in step 2
  plugins: [
    '@typescript-eslint', // Installed in step 2
    'react', // Installed in step 1
    'react-native', // Installed in step 1
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Required for Standard plugin
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'off', // Turn off prettier
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off',
    // These are the rules that I use
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': [
      'warn',
      {
        skip: ['CustomText'],
      },
    ],
    'react-native/no-single-element-style-arrays': 'warn',
    'object-curly-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],
    'react/jsx-curly-spacing': [
      'off',
      {
        when: 'always',
        allowMultiline: true,
        children: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'warn',
    semi: ['off', 'never'],
    // Indent with 2 spaces
    indent: ['off'],
    // Indent JSX with 2 spaces
    'react/jsx-indent': ['error', 2],
    // Indent props with 2 spaces
    'react/jsx-indent-props': ['error', 2],
  },
}
