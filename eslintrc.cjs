module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  rules: {
 
    'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-max-props-per-line': [1,
            {
                'maximum': 1
            }
        ],
    'react/react-in-jsx-scope': 0,
    'react/no-unused-prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
