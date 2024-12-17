/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:css/recommended'
  ],
  plugins: ['@stylistic/js', 'css', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures : {
      jsx : false
    }
  },
  // parser: '@typescript-eslint/parser', // При включении багует парсер vue файлов
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          ['ATTR_DYNAMIC', 'ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],

    '@stylistic/js/semi': ['error', 'always'],

    '@stylistic/js/semi-style': ['error', 'last'],
    camelcase: 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true // Разрешить использование неявных типов в выражениях
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true // Разрешить использование явного типа 'any' в аргументах
      }
    ],
    'css/no-dupe-properties': 'error'
  }
};
