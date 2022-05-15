module.export = {
  root: true,
  parseOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/parser', 'react', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/recommended',
  ],
  // overrides: [
  //   {
  //     files: ['**/*.ts', '**/*.tsx'],
  //     parser: '@typescript-eslint/parser',
  //     plugins: ['@typescript-eslint'],
  //     extends: ['plugin:@typescript-eslint/recommended'],
  //   },
  // ],
};
