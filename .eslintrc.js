/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
const baseConfig = require('@overdose/config/src/eslint-plugin')

baseConfig.extends.push('plugin:hydrogen/recommended', 'plugin:hydrogen/typescript')

baseConfig.rules = {
  ...baseConfig.rules,
  '@typescript-eslint/ban-ts-comment': [
    2,
    {
      'ts-expect-error': 'allow-with-description',
      minimumDescriptionLength: 10,
    },
  ],
  '@typescript-eslint/naming-convention': 'off',
  'no-useless-escape': 'warn',
  'no-case-declarations': 'warn',
  // TODO: Remove jest plugin from hydrogen/eslint-plugin
  'jest/no-deprecated-functions': 'off',
}

module.exports = baseConfig
