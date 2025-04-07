module.exports = {
  'env': {
    es2021: true,
    node: true,
    mocha: true,
  },
  'plugins': ['wdio', '@typescript-eslint'],
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'google'],
  'overrides': [{
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/promise-function-async': 'warn',
    },
  },
  {
    files: ['*.js'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  ],
  'parserOptions': {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  'rules': {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
    ],
    'no-tabs': 'error',
    'max-len': ['error', {code: 321}],
    'require-jsdoc': 0,
    'no-invalid-this': 'error',
    'space-before-function-paren': 'error',
    'no-trailing-spaces': 'error',
    'semi': ['error', 'always'],
    'linebreak-style': 'off',
    'eol-last': 'off',
  },
  'globals': {
    'expect': 'readonly',
    'jest': 'readonly',
  },
  'ignorePatterns': ['node_modules/', 'sequelize/models/'],
};