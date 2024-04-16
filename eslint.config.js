const getSvagEslintNodeConfigs = require('./configs/node')

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...getSvagEslintNodeConfigs(),
  {
    ignores: ['!configs', '!configs/*'],
  },
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]